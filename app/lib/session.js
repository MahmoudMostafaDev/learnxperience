import { session } from 'next-session';

export const getSession = session({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
});