/*
PIPELINE

Raw input text (From index.ts public api is called.) -> normalized text(call normalize func in unicode.ts) -> tokens (scanner.ts converts to tokens ) -> result (numbers matcher is called with these tokens and get back converted) 

*/

import { Dictionary } from "../dictionary.types.js";
import { scan } from "./scanner.js";
import { normalizeUnicode } from "./unicode.js";

// src/core/pipeline.ts

export function runPipeline(
  input: string,
  dictionary: Dictionary
) {
  // 1. Unicode normalization
  const normalizedInput = normalizeUnicode(input);

  // 2. Scanner
  const tokens = scan(normalizedInput, dictionary);

  return {
    input,
    normalizedInput,
    tokens
  };
}
