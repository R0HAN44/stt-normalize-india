import { MultiplierEntry } from "./constants/multipliers.js";
import { NumberEntry } from "./constants/numbers.js";
import { Dictionary, DictionaryEntry } from "./dictionary.types.js";

type Entry = NumberEntry | MultiplierEntry;

export const buildDictionary = (entries: Entry[]) => {
    let dict: Dictionary = new Map();

    for (const entry of entries) {
        for (const alias of entry.aliases) {
            const key = alias.toLowerCase();

            if (dict.has(key)) {
                throw new Error(`Duplicate alias detected: "${key}"`);
            }

            const dictEntry: DictionaryEntry = {
                type: entry.kind,
                value: entry.value,
                confidence: entry.kind === "NUMBER" ? entry.confidenceWeight : 1.0
            }

            dict.set(key, dictEntry);
        }
    }

    return dict;
}