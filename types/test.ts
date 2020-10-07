import ZstdCodec, { CompressionParams, DecompressionParams } from '.'

const dict = Buffer.from('Hello world')

const compressionParams: CompressionParams = {
  level: 3,
  dict,
  dictSize: Buffer.byteLength(dict)
}
const decompressionParams: DecompressionParams = {
  dict,
  dictSize: Buffer.byteLength(dict)
}
const configuredCodec = ZstdCodec(compressionParams, decompressionParams)()
const defaultCodec = ZstdCodec()()

const payload = {
  buffer: Buffer.from('Lorem ipsum dolor sit amet')
}

const run = async () => {
  const compressed = await configuredCodec.compress(payload)
  const decompressed = await configuredCodec.decompress(compressed)
}

run().catch((e: Error) => {
  console.error(e)
  process.exit(1)
})