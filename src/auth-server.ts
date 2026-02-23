#!/usr/bin/env node
/**
 * Standalone script to run the QuickBooks OAuth flow.
 * Starts a temporary server, opens the browser, and saves tokens to .env.
 * Run: npm run auth
 */
import "dotenv/config";
import { quickbooksClient } from "./clients/quickbooks-client.js";

async function main() {
  console.log("Starting QuickBooks OAuth flow...");
  console.log("Your browser will open for sign-in. Complete the flow there.");
  await quickbooksClient.authenticate();
  console.log("OAuth complete. Tokens saved to .env. You can close this window.");
  process.exit(0);
}

main().catch((err) => {
  console.error("OAuth failed:", err.message);
  process.exit(1);
});
