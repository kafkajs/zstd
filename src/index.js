const zstd = require("cppzst");
const { promisify } = require("util");

const compress = promisify(zstd.compress);
const decompress = promisify(zstd.decompress);

module.exports = (compressionParameters, decompressionParameters) => () => ({
  async compress(encoder) {
    return compress(encoder.buffer, compressionParameters);
  },

  async decompress(buffer) {
    return decompress(buffer, decompressionParameters);
  },
});
