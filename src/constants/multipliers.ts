import { TokenType } from "../core/types.js";

export interface MultiplierEntry {
  type: TokenType.MULTIPLIER;
  value: number;
  aliases: string[];
  isGroup: boolean;
}

export const MULTIPLIERS: MultiplierEntry[] = [
  {
    type: TokenType.MULTIPLIER,
    value: 100,
    isGroup: false,
    aliases: ["hundred", "sau", "so"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 1_000,
    isGroup: true,
    aliases: ["thousand", "k", "hazaar", "hazar", "hazaaar", "hajar"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 100_000,
    isGroup: true,
    aliases: ["lakh", "lac", "lakhs", "lacs", "laakh", "lak"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 10_000_000,
    isGroup: true,
    aliases: ["crore", "crores", "karod", "karode", "karodh"]
  },

  // Western system (for code-switching)
  {
    type: TokenType.MULTIPLIER,
    value: 1_000_000,
    isGroup: true,
    aliases: ["million", "m"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 1_000_000_000,
    isGroup: true,
    aliases: ["billion", "b"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 1_000_000_000_000,
    isGroup: true,
    aliases: ["trillion", "t"]
  },

  // Fractional/decimal multipliers (common in Indian context)
  {
    type: TokenType.MULTIPLIER,
    value: 0.5,
    isGroup: false,
    aliases: ["half", "aadha", "adha"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 0.25,
    isGroup: false,
    aliases: ["quarter", "paav", "pao", "chauthai"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 1.5,
    isGroup: false,
    aliases: ["one and half", "dedh", "derh", "saadha"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 2.5,
    isGroup: false,
    aliases: ["two and half", "dhai", "dhaai", "adhai"]
  },
  {
    type: TokenType.MULTIPLIER,
    value: 3.5,
    isGroup: false,
    aliases: ["three and half", "saade teen", "sardhe teen"]
  },
];