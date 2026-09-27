---
title: "Datacenter CORS & Network Configuration"
description: "CORS and network access controls for customer private datacenters."
---


This guide explains how to configure Cross-Origin Resource Sharing (CORS) and network access controls when deploying Power Prompt into a customer's private datacenter, private cloud, or on-premises infrastructure.

---

## 1. Overview

When Power Prompt is deployed to a customer's infrastructure with custom corporate domains (e.g. `https://powerprompt.customer.corp` or `https://ai.company.internal`), the Fastify API backend validates incoming browser `Origin` headers against an allowlist to prevent unauthorized third-party cross-site request forgery and cross-origin data access.

---

## 2. Configuration Location

All domain and CORS settings are managed via **a single environment configuration file** on the backend node:

- **Production / Datacenter Path**: `/etc/powerprompt/backend.env` or `/opt/powerprompt/.env`
- **File Permissions**: `chmod 600 /etc/powerprompt/backend.env` (Readable only by `root` / `powerprompt` service user)
- **Local Development Path**: `apps/backend/.env`

---

## 3. Configuration Variables

Set one or more of the following variables in `/etc/powerprompt/backend.env`:

| Variable Name | Description | Example Value | Required? |
|---|---|---|---|
| `FRONTEND_URL` | Primary URL of the frontend Web SPA | `https://powerprompt.customer.corp` | **Recommended** |
| `BACKEND_URL` | Public/internal base URL of the API gateway | `https://powerprompt.customer.corp/api` | Optional |
| `ALLOWED_ORIGINS` | Comma-separated list of additional allowed origins | `https://powerprompt.customer.corp,https://portal.customer.corp` | Optional |

---

## 4. Example Production Customer Configuration (`/etc/powerprompt/backend.env`)

```env
# ==============================================================================
# Power Prompt Enterprise Backend Environment Configuration
# Datacenter: Customer On-Premises Cluster
# ==============================================================================

# Server Runtime
NODE_ENV=production
PORT=8080
HOST=0.0.0.0

# ------------------------------------------------------------------------------
# 1. Customer Domains & CORS Allowlist
# ------------------------------------------------------------------------------
FRONTEND_URL=https://ai.customer-corp.com
BACKEND_URL=https://ai.customer-corp.com/api
ALLOWED_ORIGINS=https://ai.customer-corp.com,https://portal.customer-corp.com

# ------------------------------------------------------------------------------
# 2. Database Connection (PostgreSQL 17)
# ------------------------------------------------------------------------------
DB_HOST=database
DB_PORT=5432
DB_NAME=powerprompt_prod
DB_USER=pp_user_blue
DB_PASSWORD=SecureCustomerGeneratedPassword123!
DB_SSL=false

# ------------------------------------------------------------------------------
# 3. Security Secrets (Must be unique per customer deployment)
# ------------------------------------------------------------------------------
JWT_SECRET=customer-unique-jwt-secret-min-32-characters
DATA_ENCRYPTION_KEY=customer-unique-64-hex-char-encryption-key-for-aes-256-gcm
```

---

## 5. Built-in Zero-Configuration Allowlist

The Power Prompt backend includes automatic origin detection out-of-the-box:

1. **Private Corporate Subnets (RFC 1918)**:
   - `10.0.0.0/8` (e.g. `http://10.0.1.10:3000`, `http://10.200.1.5:3000`)
   - `172.16.0.0/12` (e.g. `http://172.20.0.15`)
   - `192.168.0.0/16` (e.g. `http://192.168.1.100`)
   - `localhost` / `127.0.0.1` (Local testing and reverse proxies)
   - *All internal IP addresses within these ranges are accepted automatically without explicit configuration.*

2. **Power Prompt Browser Extensions**:
   - All browser extension origins (`chrome-extension://*`) are accepted by default to allow side-panel extension functionality.

3. **Non-Browser / Server-to-Server Requests**:
   - Health checks, monitoring daemons, curl, and backend-to-backend API integrations (which send no `Origin` header) are accepted without restriction.

---

## 6. How to Apply Changes

Whenever you modify the configuration file on the server, restart the services to reload:

```bash
# For Docker Compose deployments:
cd /opt/powerprompt && sudo docker compose restart backend

# For native Linux systemd deployments:
sudo systemctl restart powerprompt-backend
sudo journalctl -u powerprompt-backend -n 25 --no-pager
```
