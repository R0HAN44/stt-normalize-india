# spoken-number-normalizer

A high-performance, matcher-based normalization engine for converting spoken or written number expressions into structured numeric values — with **first-class support for the Indian numbering system**.

Designed for **Speech-to-Text (STT)** pipelines, streaming workloads, and large-scale data processing.

---

## 📚 Table of Contents

- [Introduction](#introduction)
- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [API Reference](#-api-reference)
- [Streaming Usage](#-streaming-usage)
- [Architecture Overview](#-architecture-overview)
- [Why Not Regex?](#-why-not-regex)
- [Examples](#-examples)
- [Roadmap](#-roadmap)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## Introduction

`spoken-number-normalizer` is a deterministic normalization engine built specifically for converting **spoken numeric expressions** into structured numeric values, with native support for Indian units such as **lakh** and **crore**.

Unlike regex-heavy solutions, this library is designed to be **stream-safe**, **confidence-aware**, and resilient to noisy STT output—making it suitable for production voice systems.

---

## ✨ Features

- **Indian Number System Support**
  - Native handling of units like **lakh** and **crore**
  - Example:  
    `one crore two lakh five` → `10200005`

- **Matcher-Based Architecture**
  - Deterministic matchers instead of brittle regular expressions
  - Better handling of nested and long numeric expressions

- **Confidence Scoring**
  - Each normalization returns a confidence score
  - Useful for rejecting or flagging low-quality STT transcripts

<!-- - **Streaming-Friendly**
  - Built-in Node.js `Transform` streams
  - Processes data incrementally without full buffering -->

- **Performance First**
  - Tree-shakable ESM and CJS builds
  - Zero runtime dependencies

---

## 📦 Installation

```bash
npm install spoken-number-normalizer
```

## 🚀 Quick Start

### JavaScript

```js
import { normalizeNumber } from "spoken-number-normalizer";

const result = normalizeNumber("one crore two lakh five");

console.log(result);
/*
{
  output: 10200005,
  confidence: 0.97
}
*/
```
## 🧠 API

### `normalizeNumber(input: string)`

Normalizes a spoken number string into a structured object.

#### Interface

```ts
interface NormalizationResult {
  input: string;
  output?: number;
  confidence: number;
  error?: {
    code: string;
    message: string;
  };
}
```
<!-- ## 🌊 Streaming Usage

Designed for processing large logs or real-time audio transcript feeds **without buffering the entire payload into memory**.

### JavaScript

```js
import fs from "fs";
import { createNormalizerStream } from "stt-normalize-india";

fs.createReadStream("input.txt", { encoding: "utf8" })
  .pipe(createNormalizerStream())
  .on("data", (result) => {
    console.log("Processed Chunk:", result);
  });
``` -->
## 🧩 Architecture Overview

The engine follows a **linear pipeline** to ensure speed and predictability:

1. **Unicode Normalization**  
   Standardizes character encoding.

2. **Text Cleanup**  
   Removes fillers and linguistic noise.

3. **Scanner**  
   Tokenizes the string using a dictionary-based approach.

4. **Matcher Engine**
   - Number Matcher *(active)*
   - Currency Matcher *(in development)*

5. **Best Match Selection**  
   Weights competing parses based on confidence.

6. **Structured Output**  
   Returns the final numeric value.


## 🤔 Why not regex?

Regex-based normalization solutions often:

- Break on long or complex numeric strings
- Fail to express grammar or handle nested units  
  (e.g. `"one hundred two crore"`)
- Are not stream-safe, requiring the full string to be present in memory
- Cannot provide confidence scores for noisy STT data

This library uses **deterministic matchers**, making it robust enough for **production-grade voice applications**.

## 🛣 Roadmap

- [ ] Currency normalization (INR, USD, etc.)
- [ ] Date and time expression parsing
- [ ] Percentage handling
- [ ] STT filler removal (`"uh"`, `"actually"`, `"yaani"`)


## 📜 License

ISC
