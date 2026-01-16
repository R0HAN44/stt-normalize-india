/*
PIPELINE

Raw input text (From index.ts public api is called.) -> normalized text(call normalize func in unicode.ts) -> tokens (scanner.ts converts to tokens ) -> result (numbers matcher is called with these tokens and get back converted) 

*/