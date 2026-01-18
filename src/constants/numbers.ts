import { TokenType } from "../core/types.js";

export interface NumberEntry {
    type: TokenType.NUMBER;
    value: number;
    aliases: string[];
    confidenceWeight: number;
}

export const NUMBERS: NumberEntry[] = [
    // 0–9
    { type: TokenType.NUMBER, value: 0, aliases: ["zero", "oh", "shoonya", "shunya"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 1, aliases: ["one", "ek", "ik"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 2, aliases: ["two", "to", "do"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 3, aliases: ["three", "teen", "tin"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 4, aliases: ["four", "for", "chaar"], confidenceWeight: 0.9 },
    { type: TokenType.NUMBER, value: 5, aliases: ["five", "paanch", "panch"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 6, aliases: ["six", "cheh", "chhe"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 7, aliases: ["seven", "saat"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 8, aliases: ["eight", "aath", "ath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 9, aliases: ["nine", "nau"], confidenceWeight: 1.0 },

    // 10–19
    { type: TokenType.NUMBER, value: 10, aliases: ["ten", "das"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 11, aliases: ["eleven", "gyarah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 12, aliases: ["twelve", "baarah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 13, aliases: ["thirteen", "terah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 14, aliases: ["fourteen", "chaudah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 15, aliases: ["fifteen", "pandrah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 16, aliases: ["sixteen", "solah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 17, aliases: ["seventeen", "satrah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 18, aliases: ["eighteen", "atharah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 19, aliases: ["nineteen", "unnees"], confidenceWeight: 1.0 },

    // Tens
    { type: TokenType.NUMBER, value: 20, aliases: ["twenty", "bees", "bis"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 30, aliases: ["thirty", "tees"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 40, aliases: ["forty", "chaalis"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 50, aliases: ["fifty", "pachaas", "pachas"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 60, aliases: ["sixty", "saath"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 70, aliases: ["seventy", "sattar"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 80, aliases: ["eighty", "assi"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 90, aliases: ["ninety", "nabbe"], confidenceWeight: 1.0 }
];
