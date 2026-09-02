import { env } from '../../config/env.js';
/** Official pawaPay API hosts; a merchant-specific PAWAPAY_BASE_URL takes precedence. */
export function pawaPayBaseUrl(){if(env.PAWAPAY_BASE_URL)return env.PAWAPAY_BASE_URL; return env.PAWAPAY_ENV==='production'?'https://api.pawapay.io':'https://api.sandbox.pawapay.io';}
export const hasPawaPayCredentials=()=>Boolean(env.PAWAPAY_API_TOKEN);
