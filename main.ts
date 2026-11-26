import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Entry for "Funniest Forecast for a City That Isn't"
// (make.fun bounty u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf):
// one line, 97 characters, under the 120-character limit.
const ENTRY =
  "Tomorrow in Clashford: rain and sun are double-booked for noon. Bring an umbrella and sunglasses.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
