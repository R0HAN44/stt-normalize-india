import { Matcher, MatcherResult, TokenType } from "../../core/types.js";
import { numberMatcher } from "../numbers/numberMatcher.js";


export const currencyMatcher: Matcher = {
  name: "currency",

  canHandle(tokens) {
    return tokens.some(t => t.type === TokenType.CURRENCY);
  },

  match(tokens): MatcherResult {
    const numberTokens = tokens.filter(
      t => t.type !== TokenType.CURRENCY
    );

    const numberResult = numberMatcher.match(numberTokens);
    if (!numberResult.ok) return numberResult;

    return {
      ok: true,
      value: `₹${numberResult.value}`,
      confidence: numberResult.confidence
    };
  }
};

