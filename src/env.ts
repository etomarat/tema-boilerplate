import dotenv from 'dotenv';
dotenv.config();

const unsafePswdStr = 'unsafe password';

export const {
  PORT,
  SECRET = unsafePswdStr,
  DB_NAME = 'default',
  SESSION_SECRET = unsafePswdStr,
  ADMIN_SECRET = unsafePswdStr,
  COMPANY_NAME = 'Company'
} = process.env;