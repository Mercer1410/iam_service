import { config } from 'dotenv';
import * as fs from 'node:fs';
import * as gKeys from './rm-iam-keys.json';

if (process.env.NODE_ENV !== 'production') {
  config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });
  const keysData = fs.readFileSync(fs.realpathSync('./src/config/rm-iam-keys.json', 'utf-8'), 'utf-8');
  const keys = JSON.parse(keysData);
  console.log('keys => ', keys);
  // console.log(gKeys.web);
  
} else {
  config();
}

export const { IAM_SERVICE_PORT, MONGODB_URL, RSA_SECRET, GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET } = process.env;
