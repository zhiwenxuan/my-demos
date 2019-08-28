# vue-protobuf

## protobuf

### 关于protobuf
protobuf 是一种二进制式的数据结构，主要用来数据传输。

### 与后端交互的使用思路
向后端请求数据时：拿到后端数据（protobuf 格式） =》 根据 proto 文件解码成 json 格式 =》 前端正常使用

向后端发送数据时： json 格式数据 =》 根据proto 文件编码成 protobuf 格式 =》 发送给后端

### protobuf 的解码与编码

```js

// awesome.proto
package awesomepackage;
syntax = "proto3";

message AwesomeMessage {
    string awesome_field = 1; // becomes awesomeField
    int64 num = 2; //
}

// example.js 使用例子
const protobuf = require('protobufjs');

protobuf.load("awesome.proto", function (err, root) {
  if (err)
    throw err;

  // Obtain a message type 引入消息类型
  var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

  // Exemplary payload // 要编码的数据
  var payload = { awesomeField: "AwesomeString" };

  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  // 验证要编码的数据是否正确
  var errMsg = AwesomeMessage.verify(payload);
  if (errMsg)
    throw Error(errMsg);

  // 编码成buffer 格式
  // Create a new message
  var message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

  // Encode a message to an Uint8Array (browser) or Buffer (node)
  var buffer = AwesomeMessage.encode(message).finish();
  console.log(buffer)
  // ... do something with buffer

  // 通过AwesomeMessage.decode 解码 并通过AwesomeMessage.toObject 转成json格式
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
```


---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


