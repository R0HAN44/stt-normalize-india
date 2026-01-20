import { TokenType } from "../core/types.js";

export interface NumberEntry {
    type: TokenType.NUMBER;
    value: number;
    aliases: string[];
    confidenceWeight: number;
}

export const NUMBERS: NumberEntry[] = [
    // 0–9
    { type: TokenType.NUMBER, value: 0, aliases: ["zero", "oh", "shoonya", "shunya", "sifar", "sifr"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 1, aliases: ["one", "ek", "ik", "wan"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 2, aliases: ["two", "to", "too", "do", "doh"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 3, aliases: ["three", "tree", "teen", "tin", "tinn"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 4, aliases: ["four", "for", "fore", "chaar", "char"], confidenceWeight: 0.9 },
    { type: TokenType.NUMBER, value: 5, aliases: ["five", "fiv", "paanch", "panch", "paunch"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 6, aliases: ["six", "siks", "cheh", "chhe", "chheh", "che"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 7, aliases: ["seven", "saat", "sat"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 8, aliases: ["eight", "ate", "aath", "ath", "aat"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 9, aliases: ["nine", "nau", "no"], confidenceWeight: 1.0 },

    // 10–19
    { type: TokenType.NUMBER, value: 10, aliases: ["ten", "das", "dus"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 11, aliases: ["eleven", "gyarah", "gyara", "giyara"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 12, aliases: ["twelve", "baarah", "bara", "barah"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 13, aliases: ["thirteen", "terah", "tera"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 14, aliases: ["fourteen", "chaudah", "chodah", "choda"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 15, aliases: ["fifteen", "pandrah", "pandra"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 16, aliases: ["sixteen", "solah", "sola"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 17, aliases: ["seventeen", "satrah", "satra"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 18, aliases: ["eighteen", "atharah", "athara", "aathara"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 19, aliases: ["nineteen", "unnees", "unnis", "unees"], confidenceWeight: 1.0 },

    // Tens (20-90)
    { type: TokenType.NUMBER, value: 20, aliases: ["twenty", "bees", "bis", "beez"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 30, aliases: ["thirty", "tees", "tis"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 40, aliases: ["forty", "chaalis", "chalis"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 50, aliases: ["fifty", "pachaas", "pachas", "pachchas"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 60, aliases: ["sixty", "saath", "sath"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 70, aliases: ["seventy", "sattar", "satar"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 80, aliases: ["eighty", "assi", "asi"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 90, aliases: ["ninety", "nabbe", "nabe"], confidenceWeight: 1.0 },

    // 21-29
    { type: TokenType.NUMBER, value: 21, aliases: ["twenty one", "ikkees", "ikees", "ikis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 22, aliases: ["twenty two", "baees", "bais", "bayees"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 23, aliases: ["twenty three", "tees", "teyees"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 24, aliases: ["twenty four", "chaubees", "chobis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 25, aliases: ["twenty five", "pachchees", "pachees", "pachis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 26, aliases: ["twenty six", "chhabbees", "chabbis", "chabis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 27, aliases: ["twenty seven", "sattaees", "satais"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 28, aliases: ["twenty eight", "atthaees", "athaais", "atthais"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 29, aliases: ["twenty nine", "untees", "unatis"], confidenceWeight: 0.95 },

    // 31-39
    { type: TokenType.NUMBER, value: 31, aliases: ["thirty one", "iktees", "ikatis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 32, aliases: ["thirty two", "battees", "batis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 33, aliases: ["thirty three", "taintees", "taintis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 34, aliases: ["thirty four", "chautees", "chautis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 35, aliases: ["thirty five", "paintees", "paintis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 36, aliases: ["thirty six", "chhattees", "chhattis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 37, aliases: ["thirty seven", "saintees", "saintis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 38, aliases: ["thirty eight", "adtees", "adtis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 39, aliases: ["thirty nine", "untaalees", "untalis"], confidenceWeight: 0.95 },

    // 41-49
    { type: TokenType.NUMBER, value: 41, aliases: ["forty one", "iktaalees", "iktalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 42, aliases: ["forty two", "bayaalees", "bayalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 43, aliases: ["forty three", "taintaalees", "taintalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 44, aliases: ["forty four", "chavaalees", "chavalis", "chawalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 45, aliases: ["forty five", "paintaalees", "paintalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 46, aliases: ["forty six", "chhiyaalees", "chhiyalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 47, aliases: ["forty seven", "saintaalees", "saintalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 48, aliases: ["forty eight", "adhtaalees", "adhtalis"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 49, aliases: ["forty nine", "unchaas", "unchas"], confidenceWeight: 0.95 },

    // 51-59
    { type: TokenType.NUMBER, value: 51, aliases: ["fifty one", "ikyaavan", "ikawan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 52, aliases: ["fifty two", "baavan", "bawan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 53, aliases: ["fifty three", "tirpan", "trepan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 54, aliases: ["fifty four", "chauvan", "chowan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 55, aliases: ["fifty five", "pachpan", "pachwan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 56, aliases: ["fifty six", "chhappan", "chhawan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 57, aliases: ["fifty seven", "sattaavan", "satawan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 58, aliases: ["fifty eight", "atthaavan", "athawan"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 59, aliases: ["fifty nine", "unsath", "unasath"], confidenceWeight: 0.95 },

    // 61-69
    { type: TokenType.NUMBER, value: 61, aliases: ["sixty one", "iksath", "ikasath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 62, aliases: ["sixty two", "baasath", "basath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 63, aliases: ["sixty three", "tirsath", "tresath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 64, aliases: ["sixty four", "chausath", "chosath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 65, aliases: ["sixty five", "painsath", "paansath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 66, aliases: ["sixty six", "chhiyaasath", "chhiyasath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 67, aliases: ["sixty seven", "sarsath", "sadasath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 68, aliases: ["sixty eight", "adhaasath", "adhasath"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 69, aliases: ["sixty nine", "unhattar", "unahatar"], confidenceWeight: 0.95 },

    // 71-79
    { type: TokenType.NUMBER, value: 71, aliases: ["seventy one", "ikhattar", "ikahatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 72, aliases: ["seventy two", "bahattar", "bahatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 73, aliases: ["seventy three", "tihattar", "tihatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 74, aliases: ["seventy four", "chauhattar", "chohatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 75, aliases: ["seventy five", "pachattar", "pachatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 76, aliases: ["seventy six", "chihhattar", "chihhatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 77, aliases: ["seventy seven", "satattar", "satahatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 78, aliases: ["seventy eight", "athattar", "athahatar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 79, aliases: ["seventy nine", "unasi", "unassi"], confidenceWeight: 0.95 },

    // 81-89
    { type: TokenType.NUMBER, value: 81, aliases: ["eighty one", "iyasi", "ikyasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 82, aliases: ["eighty two", "bayasi", "baasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 83, aliases: ["eighty three", "tirasi", "tiyasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 84, aliases: ["eighty four", "chaurasi", "chorasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 85, aliases: ["eighty five", "pachasi", "pachhasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 86, aliases: ["eighty six", "chhiyasi", "chhiasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 87, aliases: ["eighty seven", "satasi", "sataasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 88, aliases: ["eighty eight", "athasi", "athaasi"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 89, aliases: ["eighty nine", "navassi", "navasi"], confidenceWeight: 0.95 },

    // 91-99
    { type: TokenType.NUMBER, value: 91, aliases: ["ninety one", "ikyanve", "ikyanway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 92, aliases: ["ninety two", "baanve", "banway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 93, aliases: ["ninety three", "tiranve", "tiranway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 94, aliases: ["ninety four", "chauranve", "choranway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 95, aliases: ["ninety five", "panchanve", "panchanway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 96, aliases: ["ninety six", "chhiyanve", "chhiyanway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 97, aliases: ["ninety seven", "sattaanve", "sattanway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 98, aliases: ["ninety eight", "atthaanve", "atthanway"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 99, aliases: ["ninety nine", "ninyaanve", "ninyanway"], confidenceWeight: 0.95 },

    // Hundreds (spoken forms)
    { type: TokenType.NUMBER, value: 100, aliases: ["one hundred", "hundred", "ek sau", "sau"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 200, aliases: ["two hundred", "do sau"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 300, aliases: ["three hundred", "teen sau"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 400, aliases: ["four hundred", "chaar sau"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 500, aliases: ["five hundred", "paanch sau"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 600, aliases: ["six hundred", "cheh sau"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 700, aliases: ["seven hundred", "saat sau"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 800, aliases: ["eight hundred", "aath sau"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 900, aliases: ["nine hundred", "nau sau"], confidenceWeight: 0.95 },

    // Common spoken thousands
    { type: TokenType.NUMBER, value: 1000, aliases: ["one thousand", "thousand", "ek hazaar"], confidenceWeight: 1.0 },
    { type: TokenType.NUMBER, value: 2000, aliases: ["two thousand", "do hazaar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 3000, aliases: ["three thousand", "teen hazaar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 4000, aliases: ["four thousand", "chaar hazaar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 5000, aliases: ["five thousand", "paanch hazaar"], confidenceWeight: 0.95 },
    { type: TokenType.NUMBER, value: 10000, aliases: ["ten thousand", "das hazaar"], confidenceWeight: 0.95 },
];