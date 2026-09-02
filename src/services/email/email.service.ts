import nodemailer from 'nodemailer'; import { env } from '../../config/env.js'; import { logger } from '../../config/logger.js';
const transport=env.SMTP_HOST?nodemailer.createTransport({host:env.SMTP_HOST,port:env.SMTP_PORT,secure:env.SMTP_SECURE,auth:env.SMTP_USER?{user:env.SMTP_USER,pass:env.SMTP_PASS}:undefined}):undefined;
export async function sendEmail(to:string,subject:string,text:string){if(!transport){logger.warn({to,subject},'SMTP is not configured; email not delivered');return;} await transport.sendMail({from:env.SMTP_FROM,to,subject,text});}
