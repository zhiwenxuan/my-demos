/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  java_package: "com.bees360.internal.ai.exchange.aiweb"
})
.addJSON({
  api: {
    nested: {
      ai2client: {
        nested: {
          DataProcessStage: {
            fields: {
              projectId: {
                type: "int64",
                id: 1
              },
              modeling: {
                type: "DataProcessStageItem",
                id: 2
              },
              ranging: {
                type: "DataProcessStageItem",
                id: 3
              },
              scoping: {
                type: "DataProcessStageItem",
                id: 4
              },
              plane: {
                type: "DataProcessStageItem",
                id: 5
              },
              boundary: {
                type: "DataProcessStageItem",
                id: 6
              },
              confirm: {
                type: "DataProcessStageItem",
                id: 7
              },
              latestAiStageStatus: {
                type: "string",
                id: 8
              }
            }
          },
          DataProcessStageItem: {
            fields: {
              stageName: {
                type: "string",
                id: 1
              },
              dataUrl: {
                type: "string",
                id: 2
              },
              selectedIndexes: {
                rule: "repeated",
                type: "int32",
                id: 3
              },
              createdAt: {
                type: "int64",
                id: 4
              },
              updatedAt: {
                type: "int64",
                id: 5
              },
              updatedBy: {
                type: "int64",
                id: 6
              },
              status: {
                type: "string",
                id: 7
              },
              msg: {
                type: "string",
                id: 8
              },
              isNext: {
                type: "bool",
                id: 9
              }
            }
          },
          SelectedIndexes: {
            fields: {
              indexes: {
                rule: "repeated",
                type: "int32",
                id: 1
              }
            }
          },
          ModelingParams: {
            fields: {
              imageSize: {
                type: "int32",
                id: 1
              },
              pmvsLevel: {
                type: "int32",
                id: 2
              },
              pmvswSize: {
                type: "int32",
                id: 3
              },
              pmvsThreshold: {
                type: "double",
                id: 4
              },
              pmvsMaxAngle: {
                type: "int32",
                id: 5
              },
              pmvsQuad: {
                type: "double",
                id: 6
              }
            }
          },
          DataProcessStageConfirm: {
            fields: {
              isSuccess: {
                type: "bool",
                id: 1
              },
              reason: {
                type: "string",
                id: 2
              }
            }
          },
          PipelineList: {
            fields: {
              pipelines: {
                rule: "repeated",
                type: "Pipeline",
                id: 1
              }
            }
          },
          Pipeline: {
            fields: {
              id: {
                type: "int64",
                id: 1
              },
              projectId: {
                type: "int64",
                id: 2
              },
              stage: {
                type: "string",
                id: 3
              },
              trigger: {
                type: "int64",
                id: 4
              },
              createdAt: {
                type: "int64",
                id: 5
              },
              finishedAt: {
                type: "int64",
                id: 6
              },
              status: {
                type: "int64",
                id: 7
              },
              msg: {
                type: "int64",
                id: 8
              }
            }
          },
          ProjectImageList: {
            fields: {
              images: {
                rule: "repeated",
                type: "ProjectImageItem",
                id: 1
              }
            }
          },
          ProjectImageItem: {
            fields: {
              imageId: {
                type: "int64",
                id: 1
              },
              projectId: {
                type: "int64",
                id: 2
              },
              fileName: {
                type: "string",
                id: 3
              },
              fileNameMiddleResolution: {
                type: "string",
                id: 4
              },
              fileNameLowerResolution: {
                type: "string",
                id: 5
              },
              originalFileName: {
                type: "string",
                id: 6
              }
            }
          },
          ResponseBody: {
            fields: {
              code: {
                type: "int32",
                id: 1
              },
              message: {
                type: "string",
                id: 2
              },
              data: {
                type: "Data",
                id: 3
              }
            },
            nested: {
              Data: {
                fields: {
                  type: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "bytes",
                    id: 2
                  }
                }
              }
            }
          },
          ValidError: {
            fields: {
              type: {
                type: "ValidErrorType",
                id: 1
              },
              field: {
                type: "string",
                id: 2
              },
              message: {
                type: "string",
                id: 3
              }
            },
            nested: {
              ValidErrorType: {
                values: {
                  UNRECOGNIZED_TYPE: 0,
                  MISSING_FIELD: 1,
                  INVALID: 2,
                  TYPE_MISMATCH: 3
                }
              }
            }
          }
        }
      }
    }
  },
  exchange: {
    nested: {
      aiweb: {
        nested: {
          UserVo: {
            fields: {
              firstName: {
                type: "string",
                id: 1
              },
              lastName: {
                type: "string",
                id: 2
              },
              email: {
                type: "string",
                id: 3
              }
            }
          }
        }
      }
    }
  },
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
