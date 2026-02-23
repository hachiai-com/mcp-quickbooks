# QuickBooks Online MCP Server

This is a Model Context Protocol (MCP) server implementation for QuickBooks Online integration. It lets AI assistants access QuickBooks data via MCP.

**npm package:** [`@hachiai-com/mcp-quickbooks`](https://www.npmjs.com/package/@hachiai-com/mcp-quickbooks)

## Install

```bash
npm install @hachiai-com/mcp-quickbooks
```

Or clone this repo and run `npm install` in the project directory.

## Setup

1. Install dependencies (if not using the npm package):
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
QUICKBOOKS_CLIENT_ID=your_client_id
QUICKBOOKS_CLIENT_SECRET=your_client_secret
QUICKBOOKS_ENVIRONMENT=sandbox
```

3. Get your Client ID and Client Secret:
   - Go to the [Intuit Developer Portal](https://developer.intuit.com/)
   - Create a new app or select an existing one
   2. Create a new app (or select an existing one)
- Get the Client ID and Client Secret from the app's keys section
  In **Keys & Credentials**:
   - Use **Development** for testing (Sandbox)
   - Use **Production** only for real customer data
  Copy:
   - **Client ID**
   - **Client Secret**
 Go to **Settings** → **Redirect URIs** and add:

   - Add `http://localhost:8000/callback` to the app's Redirect URIs

## Authentication

There are two ways to authenticate with QuickBooks Online:

### Option 1: Using Environment Variables

If you already have a refresh token and realm ID, you can add them directly to your `.env` file:

```env
QUICKBOOKS_REFRESH_TOKEN=your_refresh_token
QUICKBOOKS_REALM_ID=your_realm_id
```

### Option 2: Using the OAuth Flow

If you don't have a refresh token, run:

```bash
npm run auth
```

This will:
- Start a temporary local server
- Open your default browser automatically
- Redirect you to QuickBooks for authentication
- Save the tokens to your `.env` file once authenticated
- Close automatically when complete

## Usage

After authentication is set up, you can use the MCP server to interact with QuickBooks Online. The server provides various tools for managing customers, estimates, bills, and more.

## Available Tools

Added tools for Create, Delete, Get, Search, Update for the following entities:


- Account
- Bill Payment
- Bill
- Customer
- Employee
- Estimate
- Invoice
- Item
- Journal Entry
- Purchase
- Vendor


4. Build the Project

This compiles TypeScript and produces dist/auth-server.js and dist/index.js.
```
npm run build
```
You should see dist/auth-server.js created.

5. Authenticate with QuickBooks (First Time)

Run:
```
npm run auth
```
What this does (from src/auth-server.ts):

- Loads environment variables via dotenv/config

- Imports the QuickBooks client and calls quickbooksClient.authenticate()

- If no valid refresh token / realm ID is found:

           -Starts a temporary local server

           -Opens your browser automatically

- Sends you to QuickBooks to sign in and authorize

Receives the callback on http://localhost:8000/callback

- Saves tokens to .env

- Exits automatically

After success, your .env will contain:

QUICKBOOKS_REFRESH_TOKEN=...
QUICKBOOKS_REALM_ID=...


In the terminal 
```
PS C:\Users\quickbooks-online-mcp-server> npm run auth

> @qboapi/qbo-mcp-server@0.0.1 auth
> node dist/auth-server.js

Starting QuickBooks OAuth flow...
Your browser will open for sign-in. Complete the flow there.
OAuth complete. Tokens saved to .env. You can close this window.
```
## Error Handling

If you see an error message like "QuickBooks not connected", make sure to:

1. Check that your `.env` file contains all required variables
QUICKBOOKS_CLIENT_ID=your_client_id_here
QUICKBOOKS_CLIENT_SECRET=your_client_secret_here
QUICKBOOKS_ENVIRONMENT=sandbox
QUICKBOOKS_REDIRECTURI=http://localhost:8000/callback

2. Verify that your tokens are valid and not expired

