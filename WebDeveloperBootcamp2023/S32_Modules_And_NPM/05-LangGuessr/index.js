// Using import and require in the same file
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// ===========================================

import { franc } from "franc";
const langs = require("langs");
const input = process.argv[2];
const colors = require("colors");

const langCode = franc(input);

if (langCode === "und") {
  console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}
