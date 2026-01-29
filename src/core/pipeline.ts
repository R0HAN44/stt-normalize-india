/*
PIPELINE

Raw input text (From index.ts public api is called.) -> normalized text(call normalize func in unicode.ts) -> tokens (scanner.ts converts to tokens ) -> result (numbers matcher is called with these tokens and get back converted) 

*/

import { Dictionary } from "../dictionary.types.js";
import { runMatchers } from "../matchers/registry.js";
import { normalizeText } from "./normalize.js";
import { scan } from "./scanner.js";
import { Matcher, NormalizationResult } from "./types.js";
import { normalizeUnicode } from "./unicode.js";

// src/core/pipeline.ts

export function runPipeline(
  input: string,
  dictionary: Dictionary,
  matchers: Matcher[]
): NormalizationResult {
  const unicode = normalizeUnicode(input);
  // const cleaned = normalizeText(unicode); //remove fillers etc
  const tokens = scan(unicode, dictionary);

  const result = runMatchers(tokens, matchers);

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
    confidence: result.confidence!
  };
}


