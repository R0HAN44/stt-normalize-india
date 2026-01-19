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
    isGroup?: boolean;
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

export type NormalizationErrorCode =
  | "UNKNOWN_TOKEN"
  | "INVALID_GRAMMAR"
  | "EMPTY_INPUT"
  | "NO_NUMBER_FOUND";

export interface NormalizationError {
  code: NormalizationErrorCode;
  message: string;
}
