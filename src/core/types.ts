export enum TokenType {
    NUMBER = "NUMBER",
    MULTIPLIER = "MULTIPLIER",
    UNKNOWN = "UNKNOWN"
}

export interface Token {
    raw: string;
    normalized: string;
    type: TokenType;
    value?: number;
    confidence: number;
}

export interface ScanResult {
    tokens: Token[];
}

export interface NormalizationResult {
    input: string;
    output?: number;
    confidence: number;
    error?: {
        code: string;
        message: string;
    };
}

export enum ScannerState {
    DEFAULT = "DEFAULT"
}
