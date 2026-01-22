import { buildDictionary } from "./buildDictionary.js";
import { MULTIPLIERS } from "./constants/multipliers.js";
import { NUMBERS } from "./constants/numbers.js";
import { runPipeline } from "./core/pipeline.js";
import { numberMatcher } from "./matchers/numbers/numberMatcher.js";
import { NormalizationResult } from "./core/types.js";

const numberDictionary = buildDictionary([
  ...NUMBERS,
  ...MULTIPLIERS
]);

export function normalizeNumber(input: string): NormalizationResult {
  return runPipeline(
    input,
    numberDictionary,
    [numberMatcher]
  );
}

normalizeNumber("one crore two lakh five");
