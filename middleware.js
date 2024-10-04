import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode('00b4ffa801a1d4ce4302295b21b0ef918dd637573aa363d057d88f91b736875a122ab17f33ce5e173a92c5e475eed103e1e871794e1b2e68f2a8ba27419b2df0'); 

export function middleware(req) {
  const token = req.cookies.get('token'); 

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));  
  }

  try {
    jwtVerify(token.value, SECRET_KEY);
    return NextResponse.next();  
  } catch (error) {
    console.error('Invalid token', error);
    return NextResponse.redirect(new URL('/login', req.url)); 
  }
}

export const config = {
  matcher: ['/dashboard'],
};