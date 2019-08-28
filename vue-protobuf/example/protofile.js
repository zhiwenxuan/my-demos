// 直接使用 proto 文件
const protobuf = require('protobufjs');


protobuf.load("proto/awesome.proto", function (err, root) {
  if (err)
    throw err;

  // Obtain a message type
  var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

  // Exemplary payload
  var payload = { awesomeField: "AwesomeString111" };

  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  var errMsg = AwesomeMessage.verify(payload);
  if (errMsg)
    throw Error(errMsg);

  // Create a new message
  var message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

  // Encode a message to an Uint8Array (browser) or Buffer (node)
  var buffer = AwesomeMessage.encode(message).finish();
  console.log(buffer)
  // ... do something with buffer

  // Decode an Uint8Array (browser) or Buffer (node) to a message
  var message1 = AwesomeMessage.decode(buffer);
  // ... do something with message

  // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

  // Maybe convert the message back to a plain object
  var object = AwesomeMessage.toObject(message1, {
    longs: Number, // 类型转换，重要 @TODO
    enums: String,
    bytes: String,
    // see ConversionOptions
  });
  console.log(object)
});