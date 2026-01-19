import { TokenType } from "../core/types.js";

export interface MultiplierEntry {
  type: TokenType.MULTIPLIER;
  value: number;
  aliases: string[];
  isGroup: boolean;
}

export const MULTIPLIERS: MultiplierEntry[] = [
  { type: TokenType.MULTIPLIER, value: 100, isGroup: false, aliases: ["hundred", "sau"] },
  { type: TokenType.MULTIPLIER, value: 1_000, isGroup: true, aliases: ["thousand", "hazaar", "hazar"] },
  { type: TokenType.MULTIPLIER, value: 100_000, isGroup: true, aliases: ["lakh", "lac", "lakhs"] },
  { type: TokenType.MULTIPLIER, value: 10_000_000, isGroup: true, aliases: ["crore", "crores"] }
];
