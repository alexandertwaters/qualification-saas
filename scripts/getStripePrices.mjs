#!/usr/bin/env node
/** One-off script to list Stripe Price IDs from products. Run: node scripts/getStripePrices.mjs */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
let env = { ...process.env };
try {
  const raw = readFileSync(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
  }
} catch (e) {
  // ignore if file missing; process.env may already have STRIPE_SECRET_KEY
}

const key = env.STRIPE_SECRET_KEY;
if (!key) {
  console.error("STRIPE_SECRET_KEY not found in .env.local");
  process.exit(1);
}

const stripe = new Stripe(key);
const { data: prices } = await stripe.prices.list({ limit: 100, expand: ["data.product"] });

const productIds = [
  "prod_U5xSnzUkR0lnFZ", "prod_U5xTW8iduono76",
  "prod_U5xVA7H3FM8Vsc", "prod_U5xUbdnYFrSobO",
  "prod_U5xX7llsZaf6po", "prod_U5xWvL6Z9TZ2bH",
];

const byProd = {};
for (const p of prices) {
  const prodId = typeof p.product === "object" ? p.product?.id : p.product;
  if (productIds.includes(prodId)) {
    if (!byProd[prodId]) byProd[prodId] = [];
    byProd[prodId].push({ id: p.id, interval: p.recurring?.interval, amount: p.unit_amount / 100 });
  }
}

console.log("\nPrice IDs (copy these into .env.local):\n");
const labels = {
  prod_U5xSnzUkR0lnFZ: "Starter Annual",
  prod_U5xTW8iduono76: "Starter Monthly",
  prod_U5xVA7H3FM8Vsc: "Growth Annual",
  prod_U5xUbdnYFrSobO: "Growth Monthly",
  prod_U5xX7llsZaf6po: "Scale Annual",
  prod_U5xWvL6Z9TZ2bH: "Scale Monthly",
};
for (const [pid, list] of Object.entries(byProd)) {
  for (const pr of list) {
    const label = labels[pid] || pid;
    const envName = label.toUpperCase().replace(" ", "_").replace(" ", "_");
    const suffix = pr.interval === "year" ? "ANNUAL" : "MONTHLY";
    const key = `STRIPE_PRICE_${envName.split("_")[0]}_${suffix}`;
    console.log(`${key}=${pr.id}  # ${label} ($${pr.amount}/${pr.interval})`);
  }
}
console.log("");
