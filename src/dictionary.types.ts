import { TokenType } from "./core/types.js";

export interface DictionaryEntry {
    type: TokenType;
    value: number;
    confidence: number;
    isGroup: boolean;
}

export type Dictionary = Map<string, DictionaryEntry>;