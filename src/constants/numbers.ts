import { TokenType } from "../core/types.js";

export interface NumberEntry {
    type: TokenType.NUMBER;
    value: number;
    aliases: string[];
    confidenceWeight: number;
}

export const NUMBERS: NumberEntry[] = [
    { type: TokenType.NUMBER, value: 0, aliases: ["zero", "shoonya"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 1, aliases: ["one", "ek"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 2, aliases: ["two", "do"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 5, aliases: ["five", "paanch"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 10, aliases: ["ten", "das"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 20, aliases: ["twenty", "bees"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 50, aliases: ["fifty", "pachaas", "pachas"], confidenceWeight: 0.95 }
];
