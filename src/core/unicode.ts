// Tasks:

// lowercase

// trim

// collapse whitespace

// normalize scripts

// normalize digits

// This is lossless cleanup.

/**
 * Unicode and script normalization for STT output.
 * Lossless and deterministic.
 */
export function normalizeUnicode(input: string): string {
    if (!input) return "";

    let text = input;

    // 1. Canonical Unicode normalization
    // NFKC collapses equivalent codepoints
    text = text.normalize("NFKC");

    // 2. Lowercase 
    text = text.toLowerCase();

    // 3. Normalize Devanagari digits → ASCII digits
    text = text.replace(/[०-९]/g, (d) => {
        return String(d.charCodeAt(0) - 0x0966);
    });

    // 4. Replace non-breaking spaces and weird spaces
    text = text.replace(/\u00A0/g, " ");

    // 5. Collapse multiple whitespace into single space
    text = text.replace(/\s+/g, " ");

    // 6. Trim
    text = text.trim();

    return text;
}
