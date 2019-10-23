// 将proto 文件转为 js文件 再使用
const protoRoot = require('./proto/proto.js')
// const protobuf = require('protobufjs');

const encodeObjectToBuffer = function (payload, messageType) {
  // Obtain a message type
  const MessageInstance = protoRoot.lookupType(messageType);

  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  const errMsg = MessageInstance.verify(payload);
  if (errMsg) {
    throw Error(errMsg);
  }
  // Create a new message
  const message = MessageInstance.create(payload); // or use .fromObject if conversion is necessary

  // Encode a message to an Uint8Array (browser) or Buffer (node)
  return MessageInstance.encode(message).finish();
}

const decodeBufferToObject = function (buffer, messageType) {
  // Obtain a message type
  var AwesomeMessage = protoRoot.lookupType(messageType);

  // Decode an Uint8Array (browser) or Buffer (node) to a message
  var message1 = AwesomeMessage.decode(buffer);
  // ... do something with message

  // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

  // Maybe convert the message back to a plain object
  var object = AwesomeMessage.toObject(message1, {
    longs: Number, // 类型转换，重要 @TODO
    enums: String,
    defaults: true // 保留默认值
    // bytes: String,
    // see ConversionOptions
  });
  return object;
}

const resType = 'api.ai2client.ResponseBody';
const indexType = 'api.ai2client.SelectedIndexes';
const indexPayload = { indexes: [1, 2, 3, 4] };
// Exemplary payload
const payload = {
  code: 0,
  message: 'success',
  data: {
    type: 'api.ai2client.SelectedIndexes',
    value: encodeObjectToBuffer(indexPayload, indexType)
  }
};

const buffer = encodeObjectToBuffer(payload, resType)
console.log(buffer)
// ... do something with buffer

const object = decodeBufferToObject(buffer, resType);
console.log(object)

if (object) {
  const value = decodeBufferToObject(object.data.value, object.data.type);
  console.log(value)
}
