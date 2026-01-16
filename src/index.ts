import { buildDictionary } from "./buildDictionary.js";
import { MULTIPLIERS } from "./constants/multipliers.js";
import { NUMBERS } from "./constants/numbers.js";


function main() {
  const dictionary = buildDictionary([
    ...NUMBERS,
    ...MULTIPLIERS
  ]);
console.log(
dictionary.get("lakh"))
  console.log(dictionary);
}

main();