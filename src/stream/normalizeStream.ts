import { Transform } from "stream";
import { runPipeline } from "../core/pipeline.js";

export function createNormalizerStream(dictionary) {
  return new Transform({
    objectMode: true,

    transform(chunk, _, callback) {
      try {
        const result = runPipeline(chunk.toString(), dictionary);
        callback(null, result);
      } catch (err) {
        callback(err);
      }
    }
  });
}
