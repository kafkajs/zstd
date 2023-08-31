const zstd = import("cppzst");

module.exports = (compressionParameters, decompressionParameters) => () => ({
  async compress(encoder) {
    return (await zstd).compress(encoder.buffer, compressionParameters);
  },

  async decompress(buffer) {
    return (await zstd).decompress(buffer, decompressionParameters);
  },
});
