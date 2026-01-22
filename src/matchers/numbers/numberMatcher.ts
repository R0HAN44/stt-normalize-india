// Semantic interpretation

import { Matcher, MatcherResult, MatchResult, NormalizationError, Token, TokenType } from "../../core/types.js";

// The numbers matcher:

// understands sequences

// applies multipliers

// validates grammar

// computes final number

// Input:

// NUMBER → MULTIPLIER → NUMBER → MULTIPLIER → NUMBER


// Output:

// 10200005

// numberMatcher.ts
export const numberMatcher: Matcher = {
  name: "number",

  canHandle(tokens) {
    return tokens.some(t => t.type === TokenType.NUMBER);
  },

  match(tokens): MatcherResult {
    let total = 0;
    let current = 0;
    let confidenceSum = 0;
    let confidenceCount = 0;

    for (const token of tokens) {
      if (token.type === TokenType.NUMBER) {
        current += token.value!;
      }
      else if (token.type === TokenType.MULTIPLIER) {
        if (current === 0) {
          return {
            ok: false,
            error: {
              code: "INVALID_GRAMMAR",
              message: "Multiplier without base number"
            }
          };
        }

        if (token.isGroup) {
          total += current * token.value!;
          current = 0;
        } else {
          current *= token.value!;
        }
      }
      else {
        return {
          ok: false,
          error: {
            code: "INVALID_GRAMMAR",
            message: `Unexpected token: ${token.raw}`
          }
        };
      }

      confidenceSum += token.confidence;
      confidenceCount++;
    }

    total += current;

    if (confidenceCount === 0) {
      return {
        ok: false,
        error: {
          code: "NO_NUMBER_FOUND",
          message: "No numeric tokens found"
        }
      };
    }

    return {
      ok: true,
      value: total,
      confidence: confidenceSum / confidenceCount
    };
  }
};

