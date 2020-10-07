# `@kafkajs/zstd`

ZStandard codec for KafkaJS.

**WIP: Currently publishing compressed messages is failing. Not ready for usage yet!**

## Installation

```sh
npm install --save @kafkajs/zstd
```

## Configuration

```javascript
const {  CompressionTypes, CompressionCodecs } = require('kafkajs')
const ZstdCodec = require('@kafkajs/zstd')

// Both compressionParams and decompressionParams are optional
const compressionParams = { level: 1 }
const decompressionParams = {}
CompressionCodecs[CompressionTypes.ZSTD] = ZstdCodec(compressionParams, decompressionParams)
```

### `compressionParams`

**Optional** Allows you to configure the compression level and training data.

```js
{
    /*  
     * Higher compression level means faster at the cost of compression ratio or memory usage.
     * See https://facebook.github.io/zstd/
     */
    level: 3,

    /*
     * Training data for improving performance on small payloads.
     * See https://facebook.github.io/zstd/#small-data
     */
    dict: trainingData,
    dictSize: Buffer.byteLength(trainingData)
}
```

### `decompressionParams`

**Optional** Allows you to configure the training data.

```js
{
    /*
     * Training data for improving performance on small payloads.
     * See https://facebook.github.io/zstd/#small-data
     */
    dict: trainingData,
    dictSize: Buffer.byteLength(trainingData)
}
```

## Testing

```sh
$ docker-compose up -d && node scripts/waitForKafka.js
$ npm test

# Interactive mode
$ npm run test:watch

# Verify type definitions
$ npm run test:types

# Lint
$ npm run lint
```

## License

See [LICENSE](https://github.com/kafkajs/zstd/blob/master/LICENSE) for more details.