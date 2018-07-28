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
      "quotes": 0,
      "semi"  : (()=>{
        switch (mode){
          case "lib": return [1, "never"]
          default: return [1, "always"]
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
      "no-useless-escape"      : 0,
      "new-cap"                : 0,
      "no-redeclare"           : 0,
      "camelcase"              : 0,
      "no-sequences"           : 0,
      "no-unused-vars"         : 1,
      "no-fallthrough"         : 0,
      "no-mixed-operators"     : 0,
      "no-return-assign"       : 0,
      "no-useless-return"      : 0,
      "no-unreachable"         : 0,
      "no-trailing-spaces"     : 0,
      "no-return-await"        : 0,
      "no-multiple-empty-lines": [
        1,
        {
          "max": 2
        }
      ],
      "standard/object-curly-even-spacing": 0
    }
  }
  return config
}

const baseExtensions = ['.js', '.jsx', '.vue']
exports.getExtensions = opt=>baseExtensions
