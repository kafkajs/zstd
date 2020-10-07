const ZstdCodec = require("./index");

const encoder = {
  buffer: Buffer.from(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus ex id fringilla gravida. Duis vitae leo suscipit, auctor tellus sit amet, ullamcorper tellus. Mauris pretium urna quis urna aliquet lacinia in non urna. Sed elementum accumsan tempor. Aenean fringilla, nulla eget volutpat rutrum, dui elit faucibus lorem, tincidunt tincidunt enim dui nec purus. Sed mollis enim vel eros imperdiet, non aliquam justo egestas. Proin bibendum, arcu at molestie elementum, risus nisl gravida orci, eget efficitur nunc lectus et tortor. Vestibulum consequat, lorem nec interdum pretium, mi lorem pulvinar enim, quis pellentesque nisl ex vel arcu. Suspendisse pellentesque elementum magna, sit amet congue tellus malesuada vitae."
  ),
};

describe("Compression", () => {
  it("Compresses the payload", async () => {
    const codec = ZstdCodec()();

    const compressed = await codec.compress(encoder);

    expect(Buffer.byteLength(compressed)).toBeLessThan(
      Buffer.byteLength(encoder.buffer)
    );
  });

  it("Can decompress the compressed payload", async () => {
    const codec = ZstdCodec()();
    const compressed = await codec.compress(encoder);

    expect(await codec.decompress(compressed)).toEqual(encoder.buffer);
  });
});
