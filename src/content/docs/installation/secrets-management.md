---
title: "Secrets Management Policy"
description: "Cryptographic secret generation, rotation policies, and environment matrices."
---


## Rules

1. **NEVER commit real credentials** to the repository (.env files are in .gitignore)
2. **Each environment MUST use unique credentials**: DEV, UAT, and PROD must not share any secret
3. **Production secrets live in** `/etc/powerprompt/backend.env` on the server (`chmod 600`)
4. **.env.example files use placeholders only**: never real values
5. **Future:** Secrets will be loaded from Google Cloud Secret Manager in production/staging

## Generating Secrets

Generate cryptographically secure secrets using OpenSSL:

### JWT Session Secret (`JWT_SECRET`)
```bash
openssl rand -base64 32
```

### Data Encryption Key (`DATA_ENCRYPTION_KEY`)
```bash
openssl rand -hex 32
```

## Rotation Schedule

| Secret          | Frequency              | Impact                          |
| --------------- | ---------------------- | ------------------------------- |
| DB passwords    | Every 90 days          | Requires backend restart        |
| JWT secrets     | Every 90 days          | Invalidates all active sessions |
| Encryption keys | Planned migration only | Requires data re-encryption     |

## Environment Matrix

| Secret              | DEV             | UAT           | PROD          |
| ------------------- | --------------- | ------------- | ------------- |
| DB_PASSWORD         | local dummy     | Unique random | Unique random |
| JWT_SECRET          | local dummy     | Unique random | Unique random |
| DATA_ENCRYPTION_KEY | Zeroed test key | Unique random | Unique random |

## Google Cloud Secret Manager (Production)

When `GCP_PROJECT_ID` and `GOOGLE_APPLICATION_CREDENTIALS` are set, the backend automatically loads secrets from GCP Secret Manager before falling back to environment variables.

### Setup

1. Enable the Secret Manager API in GCP Console
2. Create a secret named `powerprompt-production` (JSON format with keys matching env vars)
3. Create a service account with "Secret Manager Secret Accessor" role
4. Deploy the JSON key to `/etc/powerprompt/gcp-service-account.json` (chmod 600)
5. Add to `backend.env`:
   ``
   GOOGLE_APPLICATION_CREDENTIALS=/etc/powerprompt/gcp-service-account.json
   GCP_PROJECT_ID=your-project-id
   ``

### New Environment Variables

| Variable                         | Required | Description                                                         |
| -------------------------------- | -------- | ------------------------------------------------------------------- |
| `GCP_PROJECT_ID`                 | For SM   | Google Cloud project ID                                             |
| `GOOGLE_APPLICATION_CREDENTIALS` | For SM   | Path to GCP service account key                                     |
| `CSP_REPORT_ONLY`                | No       | Set to `true` to switch CSP to report-only mode (default: enforced) |
| `CDN_URL`                        | No       | CDN base URL for static assets (replaces hardcoded CloudFront)      |
