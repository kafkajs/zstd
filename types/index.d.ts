interface Encoder {
    buffer: Buffer
}

export interface Codec {
    compress: (encoder: Encoder) => Promise<Buffer>;
    decompress: (compressed: Buffer) => Promise<Buffer>;
}

type AllOrNone<T> = T | { [K in keyof T]?: never };

export type CompressionParams = { level?: number } & DecompressionParams

export type DecompressionParams = AllOrNone<{
    dict: Buffer;
    dictSize: number;
}>

export default function ZstdCodec(compressionParams?: CompressionParams, decompressionParams?: DecompressionParams): () => Codec;