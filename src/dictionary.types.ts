export interface DictionaryEntry {
    type: "NUMBER" | "MULTIPLIER";
    value: number;
    confidence: number;
}

export type Dictionary = Map<string, DictionaryEntry>;