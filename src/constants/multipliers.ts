import { TokenType } from "../core/types.js";

export interface MultiplierEntry {
    type: TokenType.MULTIPLIER;
    value: number;
    aliases: string[];
}

export const MULTIPLIERS: MultiplierEntry[] = [
    { type: TokenType.MULTIPLIER, value: 100, aliases: ["hundred", "sau"] },
    { type: TokenType.MULTIPLIER, value: 1_000, aliases: ["thousand", "hazaar", "hazar"] },
    { type: TokenType.MULTIPLIER, value: 100_000, aliases: ["lakh", "lac", "lakhs"] },
    { type: TokenType.MULTIPLIER, value: 10_000_000, aliases: ["crore", "crores"] }
];
