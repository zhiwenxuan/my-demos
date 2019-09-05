# vue-protobuf

## protobuf

### 关于protobuf
protobuf 是一种二进制式的数据结构，主要用来数据传输。

### 与后端交互的使用思路
向后端请求数据时：拿到后端数据（protobuf 格式） =》 根据 proto 文件解码成 json 格式 =》 前端正常使用

向后端发送数据时： json 格式数据 =》 根据proto 文件编码成 protobuf 格式 =》 发送给后端

### 第三工具 protobufjs
https://github.com/protobufjs/protobuf.js

#### protobufjs 的解码与编码

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

#### protobufjs 在package.json 中的配置
```js
// 配置npm run proto 命令，启动工程或者打包时，先执行 npm run proto
"scripts": {
  "serve": "npm run proto && vue-cli-service serve",
  "build": "npm run proto && vue-cli-service build",
  "proto": "mkdir -p example/proto && touch example/proto/proto.js && pbjs -t json-module -w default -o example/proto/proto.js  example/proto/*.proto"
}
// 值得注意，-w 属性可以配置不同类型的模块引入方式
// pbjs 的可选项如下：
Translates between file formats and generates static code.

  -t, --target     Specifies the target format. Also accepts a path to require a custom target.

                   json          JSON representation
                   json-module   JSON representation as a module
                   proto2        Protocol Buffers, Version 2
                   proto3        Protocol Buffers, Version 3
                   static        Static code without reflection (non-functional on its own)
                   static-module Static code without reflection as a module

  -p, --path       Adds a directory to the include path.

  -o, --out        Saves to a file instead of writing to stdout.

  --sparse         Exports only those types referenced from a main file (experimental).

  Module targets only:

  -w, --wrap       Specifies the wrapper to use. Also accepts a path to require a custom wrapper.

                   default   Default wrapper supporting both CommonJS and AMD
                   commonjs  CommonJS wrapper
                   amd       AMD wrapper
                   es6       ES6 wrapper (implies --es6)
                   closure   A closure adding to protobuf.roots where protobuf is a global

  -r, --root       Specifies an alternative protobuf.roots name.

  -l, --lint       Linter configuration. Defaults to protobuf.js-compatible rules:

                   eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins

  --es6            Enables ES6 syntax (const/let instead of var)

  Proto sources only:

  --keep-case      Keeps field casing instead of converting to camel case.

  Static targets only:

  --no-create      Does not generate create functions used for reflection compatibility.
  --no-encode      Does not generate encode functions.
  --no-decode      Does not generate decode functions.
  --no-verify      Does not generate verify functions.
  --no-convert     Does not generate convert functions like from/toObject
  --no-delimited   Does not generate delimited encode/decode functions.
  --no-beautify    Does not beautify generated code.
  --no-comments    Does not output any JSDoc comments.

  --force-long     Enforces the use of 'Long' for s-/u-/int64 and s-/fixed64 fields.
  --force-number   Enforces the use of 'number' for s-/u-/int64 and s-/fixed64 fields.
  --force-message  Enforces the use of message instances instead of plain objects.

usage: pbjs [options] file1.proto file2.json ...  (or pipe)  other | pbjs [options] -
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


