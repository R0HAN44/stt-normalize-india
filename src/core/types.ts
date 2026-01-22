export enum TokenType {
  NUMBER = "NUMBER",
  MULTIPLIER = "MULTIPLIER",
  CURRENCY = "CURRENCY",
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
  | "NO_NUMBER_FOUND"
  | "NO_MATCH";

export interface NormalizationError {
  code: NormalizationErrorCode;
  message: string;
}

export type MatcherResult =
  | { ok: true; value: any; confidence: number }
  | { ok: false; error: NormalizationError };


export interface Matcher {
  name: string;
  canHandle(tokens: Token[]): boolean;
  match(tokens: Token[]): MatcherResult;
}

export interface MatchResult {
  ok: boolean;
  value?: unknown;
  confidence?: number;
  error?: {
    code: string;
    message: string;
  };
}