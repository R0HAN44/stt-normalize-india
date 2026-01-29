import { Transform } from "stream";
import { runPipeline } from "../core/pipeline.js";
import { numberMatcher } from "../matchers/numbers/numberMatcher.js";

export function createNormalizerStream(dictionary : any) {
  return new Transform({
    objectMode: true,

    transform(chunk, _, callback) {
      try {
        const result = runPipeline(chunk.toString(), dictionary, [numberMatcher]);
        callback(null, result);
      } catch (err : any) {
        callback(err);
      }
    }
  });
}
