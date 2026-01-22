const FILLERS = new Set([
    "uh",
    "um",
    "actually",
    "basically",
    "yaani",
    "yaani ki",
    "like"
]);

export function normalizeText(input: string): string {
    const words = input.split(/\s+/);
    const out: string[] = [];

    let i = 0;
    while (i < words.length) {
        const word = words[i];

        // Handle two-word filler "yaani ki"
        if (word === "yaani" && words[i + 1] === "ki") {
            i += 2;
            continue;
        }

        if (word && !FILLERS.has(word)) {
            out.push(word);
        }

        i++;
    }

    return out.join(" ");
}