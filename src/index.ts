import { buildDictionary } from "./buildDictionary.js";
import { MULTIPLIERS } from "./constants/multipliers.js";
import { NUMBERS } from "./constants/numbers.js";
import { runPipeline } from "./core/pipeline.js";
import { NormalizationResult } from "./core/types.js";

export function normalizeNumber(input : string) {
  const dictionary = buildDictionary([
    ...NUMBERS,
    ...MULTIPLIERS
  ]);

  const result : NormalizationResult = runPipeline(
    input,
    dictionary
  );
  
  return {
    output : result.output,
    confidence : result.confidence,
    error : result.error
  }
}

normalizeNumber("one crore two lakh five");