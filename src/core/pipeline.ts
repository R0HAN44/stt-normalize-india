/*
PIPELINE

Raw input text (From index.ts public api is called.) -> normalized text(call normalize func in unicode.ts) -> tokens (scanner.ts converts to tokens ) -> result (numbers matcher is called with these tokens and get back converted) 

*/

import { Dictionary } from "../dictionary.types.js";
import { matchNumber } from "../matchers/numbers/numberMatcher.js";
import { scan } from "./scanner.js";
import { NormalizationResult } from "./types.js";
import { normalizeUnicode } from "./unicode.js";

// src/core/pipeline.ts

export function runPipeline(
  input: string,
  dictionary: Dictionary
): NormalizationResult {

  const normalizedInput = normalizeUnicode(input);
  const tokens = scan(normalizedInput, dictionary);
  const result = matchNumber(tokens);

  if (!result.ok) {
    return {
      input,
      confidence: 0,
      error: result.error
    };
  }

  return {
    input,
    output: result.value,
    confidence: result.confidence
  };
}

