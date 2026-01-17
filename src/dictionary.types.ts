import { TokenType } from "./core/types.js";

export interface DictionaryEntry {
    type: TokenType;
    value: number;
    confidence: number;
}

export type Dictionary = Map<string, DictionaryEntry>;