// Semantic interpretation

import { NormalizationError, Token, TokenType } from "../../core/types.js";

// The numbers matcher:

// understands sequences

// applies multipliers

// validates grammar

// computes final number

// Input:

// NUMBER → MULTIPLIER → NUMBER → MULTIPLIER → NUMBER


// Output:

// 10200005

export type NumberMatchResult =
    | { ok: true; value: number; confidence: number }
    | { ok: false; error: NormalizationError };

export function matchNumber(tokens: Token[]): NumberMatchResult {
    if (tokens.length === 0) {
        return {
            ok: false,
            error: {
                code: "EMPTY_INPUT",
                message: "No tokens to parse"
            }
        };
    }

    let total = 0;
    let current = 0;
    let confidenceSum = 0;
    let confidenceCount = 0;

    for (const token of tokens) {
        if (token.type === TokenType.UNKNOWN) {
            return {
                ok: false,
                error: {
                    code: "UNKNOWN_TOKEN",
                    message: `Unknown token: "${token.raw}"`
                }
            };
        }

        if (token.type === TokenType.NUMBER) {
            current += token.value ?? 0;
        }

        else if (token.type === TokenType.MULTIPLIER) {
            if (current === 0) {
                return {
                    ok: false,
                    error: {
                        code: "INVALID_GRAMMAR",
                        message: `Multiplier "${token.raw}" cannot appear here`
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

        confidenceSum += token.confidence;
        confidenceCount++;
    }

    if (total === 0 && current === 0) {
        return {
            ok: false,
            error: {
                code: "NO_NUMBER_FOUND",
                message: "No numeric value could be derived"
            }
        };
    }

    total += current;

    return {
        ok: true,
        value: total,
        confidence: confidenceSum / confidenceCount
    };
}
