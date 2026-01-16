// Lexical analysis

// Scanner:

// splits text into words

// looks up each word in dictionary

// emits typed tokens

// Input:

// "one crore two lakh five"


// Output:

// [
//   NUMBER(1),
//   MULTIPLIER(10000000),
//   NUMBER(2),
//   MULTIPLIER(100000),
//   NUMBER(5)
// ]