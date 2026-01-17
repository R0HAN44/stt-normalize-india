import { buildDictionary } from "./buildDictionary.js";
import { MULTIPLIERS } from "./constants/multipliers.js";
import { NUMBERS } from "./constants/numbers.js";
import { runPipeline } from "./core/pipeline.js";

function main() {
  const dictionary = buildDictionary([
    ...NUMBERS,
    ...MULTIPLIERS
  ]);
  console.log(
    dictionary.get("lakh"))
  console.log(dictionary);

  const result = runPipeline(
    "one crore two lakh five",
    dictionary
  );
  console.log(JSON.stringify(result, null, 2));
}

main();