export interface MultiplierEntry {
    kind: "MULTIPLIER";
    value: number;
    aliases: string[];
}

export const MULTIPLIERS: MultiplierEntry[] = [
    { kind: "MULTIPLIER", value: 100, aliases: ["hundred"] },
    { kind: "MULTIPLIER", value: 1_000, aliases: ["thousand", "hazaar"] },
    { kind: "MULTIPLIER", value: 100_000, aliases: ["lakh", "lac"] },
    { kind: "MULTIPLIER", value: 10_000_000, aliases: ["crore"] }
];
