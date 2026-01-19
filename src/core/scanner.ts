// Lexical analysis

import { Dictionary } from "../dictionary.types.js";
import { Token, TokenType } from "./types.js";

// Scanner:

// splits text into words

// looks up each word in dictionary

// emits typed tokens

// Input:

// "one crore two lakh five"


// Output:

// [
//   NUMBER(1),
//   MULTIPLIER(10000000),
//   NUMBER(2),
//   MULTIPLIER(100000),
//   NUMBER(5)
// ]

export function scan(
    text: string,
    dictionary: Dictionary
): Token[] {
    const tokens: Token[] = [];

    const words = text.split(/\s+/);

    for (const rawWord of words) {
        const normalized = rawWord.toLowerCase();
        const entry = dictionary.get(normalized);

        if (entry) {
            tokens.push({
                raw: rawWord,
                normalized,
                type: entry.type,
                value: entry.value,
                confidence: entry.confidence,
                isGroup : entry.isGroup
            });
        } else {
            tokens.push({
                raw: rawWord,
                normalized,
                type: TokenType.UNKNOWN,
                confidence: 0.1
            });
        }
    }

    return tokens;
}

