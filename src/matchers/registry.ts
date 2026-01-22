import { Matcher, MatcherResult, Token } from "../core/types.js";

export function runMatchers(
  tokens: Token[],
  matchers: Matcher[]
): MatcherResult {
  let best: MatcherResult | null = null;

  for (const matcher of matchers) {
    const result = matcher.match(tokens);
    if (!result.ok) continue;

    if (
      !best ||
      (best.ok && result.confidence > best.confidence)
    ) {
      best = result;
    }
  }

  return (
    best ?? {
      ok: false,
      error: {
        code: "NO_MATCH",
        message: "No matcher could interpret input"
      }
    }
  );
}
