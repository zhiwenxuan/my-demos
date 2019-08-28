/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  awesomepackage: {
    nested: {
      AwesomeMessage: {
        fields: {
          awesomeField: {
            type: "string",
            id: 1
          },
          num: {
            type: "int64",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
