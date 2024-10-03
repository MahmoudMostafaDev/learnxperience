import clientPromise from '../../../lib/mongodb'
import { compare } from 'bcryptjs';

export async function POST(req) {
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

    console.log(`User logged in successfully: ${email}`);
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
  } catch (error) {
    console.error(`Login error: ${error.message}`);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}