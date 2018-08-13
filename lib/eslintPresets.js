exports.getConfig = ({ mode })=>{
  const config = {
    root: true,
    env : { 
      node: true
    },
    extends: [
      "plugin:vue/essential",
      "@vue/standard"
    ],
    parserOptions: {
      parser     : "babel-eslint",
      ecmaVersion: 8,
      sourceType : "module"
    },
    rules: {
      "dot-notation"         : 0,
      "camelcase"            : 0,
      "linebreak-style"      : 0,
      "quotes"               : 0,
      "max-len"              : 0,
      "prefer-destructuring" : 0,
      "padded-blocks"        : 0,
      "vars-on-top"          : 0,
      "no-param-reassign"    : 0,
      "no-prototype-builtins": 0,
      "semi"                 : (()=>{
        switch (mode){
          case "stage-1":
            return [1, "never"]
            break
          case "stage-0":
          default:
            return [1, "always"]
            break
        }
      })(),
      "eqeqeq": 0,
      "indent": [
        "error",
        2,
        {
          "SwitchCase"        : 1,
          "VariableDeclarator": {
            "var"  : 2,
            "let"  : 2,
            "const": 3
          },
          "MemberExpression"   : 0,
          "FunctionDeclaration": {
            "parameters": "first"
          },
          "FunctionExpression": {
            "parameters": "first"
          },
          "CallExpression": {
            "arguments": "first"
          },
          "ArrayExpression"       : 1,
          "ObjectExpression"      : 1,
          "ImportDeclaration"     : 1,
          "flatTernaryExpressions": true,
          "ignoreComments"        : true
        }
      ],
      "space-before-blocks": [
        "error",
        {
          "functions": "never",
          "keywords" : "never",
          "classes"  : "always"
        }
      ],
      "spaced-comment": 0,
      "arrow-spacing" : [
        "error",
        {
          "before": false,
          "after" : false
        }
      ],
      "key-spacing": [
        "error",
        {
          "beforeColon": false,
          "afterColon" : true,
          "align"      : "colon"
        }
      ],
      "keyword-spacing": [
        "error",
        {
          "before"   : true,
          "after"    : true,
          "overrides": {
            "if": {
              "after": false
            },
            "for": {
              "after": false
            },
            "while": {
              "after": false
            }
          }
        }
      ],
      "no-multi-spaces": [
        "error", {
          "exceptions": {
            "VariableDeclarator": true,
            "ImportDeclaration" : true
          }
        }
      ],
      "consistent-return"      : 0,
      "no-else-return"         : 0,
      "no-plusplus"            : 0,
      "no-shadow"              : 0,
      "no-useless-escape"      : 0,
      "new-cap"                : 0,
      "no-redeclare"           : 0,
      "no-sequences"           : 0,
      "no-unused-vars"         : ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
      "no-fallthrough"         : 0,
      "no-mixed-operators"     : 0,
      "no-return-assign"       : 0,
      "no-useless-return"      : 0,
      "no-unreachable"         : 0,
      "no-trailing-spaces"     : 0,
      "no-return-await"        : 0,
      "no-nested-ternary"      : 0, 
      "no-multiple-empty-lines": [
        1,
        {
          "max": 2
        }
      ],
      "quote-props"                       : ["error", "consistent"],
      "standard/object-curly-even-spacing": 0,
      "prefer-rest-params"                : 1,
      "radix"                             : 1,
      "no-use-before-define"              : 1
      
    }
  }
  return config
}

const baseExtensions = ['.js', '.jsx', '.vue']
exports.getExtensions = ()=>baseExtensions
