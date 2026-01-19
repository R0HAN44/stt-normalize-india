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
                type: entry.type,
                value: entry.value,
                confidence: entry.type === "NUMBER" ? entry.confidenceWeight : 1.0,
                isGroup: entry.type === "MULTIPLIER" ? entry.isGroup : false
            }

            dict.set(key, dictEntry);
        }
    }

    return dict;
}