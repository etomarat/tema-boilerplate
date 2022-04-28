import hmacSHA512 from 'crypto-js/hmac-sha512';
import { ADMIN_SECRET } from './env';

export const makeHash = (str: string) => {
  return hmacSHA512(str, ADMIN_SECRET).toString();
}
