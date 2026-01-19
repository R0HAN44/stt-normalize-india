import { describe, it, expect } from "vitest";
import { normalizeNumber } from "../src/index";

describe("Indian number normalization", () => {

  it("parses simple numbers", () => {
    const res = normalizeNumber("five");
    expect(res.output).toBe(5);
    expect(res.confidence).toBeGreaterThan(0.9);
  });

  it("parses hundred", () => {
    const res = normalizeNumber("one hundred");
    expect(res.output).toBe(100);
  });

  it("parses hundred with remainder", () => {
    const res = normalizeNumber("one hundred five");
    expect(res.output).toBe(105);
  });

  it("parses thousand", () => {
    const res = normalizeNumber("two thousand");
    expect(res.output).toBe(2000);
  });

  it("parses hundred thousand", () => {
    const res = normalizeNumber("one hundred thousand");
    expect(res.output).toBe(100000);
  });

  it("parses lakh", () => {
    const res = normalizeNumber("two lakh");
    expect(res.output).toBe(200000);
  });

  it("parses lakh with hundred", () => {
    const res = normalizeNumber("two lakh five hundred");
    expect(res.output).toBe(200500);
  });

  it("parses crore", () => {
    const res = normalizeNumber("one crore");
    expect(res.output).toBe(10000000);
  });

  it("parses complex phrase", () => {
    const res = normalizeNumber("one crore two lakh five");
    expect(res.output).toBe(10200005);
  });

  it("supports hinglish aliases", () => {
    const res = normalizeNumber("pachaas hazaar");
    expect(res.output).toBe(50000);
  });

  it("penalizes unknown tokens", () => {
    const res = normalizeNumber("one crore banana");
    expect(res.output).toBeUndefined();
    expect(res.error).toBeDefined();
  });

});
