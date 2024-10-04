import clientPromise from '../../../lib/mongodb';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = '00b4ffa801a1d4ce4302295b21b0ef918dd637573aa363d057d88f91b736875a122ab17f33ce5e173a92c5e475eed103e1e871794e1b2e68f2a8ba27419b2df0'; 

export async function POST(req, res) {
  
  const { email, password } = await req.json();

  if ( !email || !password) {
    console.log('Login attempt failed: Email and password are required');
    return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('learnXperience');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email });
    if (!user || !(await compare(password, user.password))) {
        console.log(`Login attempt failed: Invalid credentials.`);
        return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
      }
    
    const token = jwt.sign(
      { email: user.email }, 
      SECRET_KEY, 
      { expiresIn: '1h' } 
    );
    
    console.log(`User logged in successfully: ${email}`);
    return new Response(JSON.stringify({ 
      message: 'Login successful' 
    }), { 
      status: 200, 
      headers: {
        'Set-Cookie': `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`,
      }
    });
  } catch (error) {
    console.error(`Login error: ${error.message}`);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}