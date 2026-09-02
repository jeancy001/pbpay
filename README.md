# PB Pay API

A TypeScript/Fastify backend for PB Pay. Monetary balances are persisted as integer minor units; the immutable ledger is the audit trail. MongoDB is the financial system of record and Redis is used only for ephemeral security and coordination data.

## Run locally

1. Copy `.env.example` to `.env` and set strong JWT secrets plus SMTP and pawaPay credentials.
2. `docker compose up --build` or `npm install && npm run dev` with MongoDB and Redis available.
3. Open `http://localhost:5000/documentation` and use `test.http`.

## pawaPay safety

The integration uses the official sandbox/production API hosts and Bearer authorization. Deposit acceptance is persisted as `PENDING`; it never credits a wallet. A wallet credit is possible only inside a MongoDB transaction after a verified callback and a unique ledger check. Merchant capabilities, callback verification headers/formats, provider prediction, active configuration, and supported corridors must be verified and enabled in the merchant's current pawaPay account before deployment. Do not activate a callback secret or configure a proxy that transforms callback payloads without aligning the verifier to pawaPay's current documented callback mechanism.

## Production checklist

Use a managed MongoDB replica set (transactions require it), TLS for all services, a private Redis, deployment-managed secrets, SMTP, HTTPS/reverse proxy, database backups, centralized redacted logs, and health monitoring. Set `NODE_ENV=production`, restrict `APP_URL`, use a dedicated pawaPay production token, configure the provider callback endpoint, and validate the account's enabled products/corridors before releasing payment routes.
