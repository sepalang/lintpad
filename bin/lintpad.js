#!/usr/bin/env node
const argv = require('@sepalang/myself').args
const runpad = require('../lib/runpad')
const path = require('path')
const cwd  = process.cwd()

const lintpadOptions = {
  fix        : !!argv["fix"],
  cwd        : cwd,
  files      : undefined,
  parser     : "babel",
  useEslintrc: false,
  silent     : false,
  mode       : argv["m"] || argv["mode"] || argv._[1] || "app",
  filter     : argv["f"] || argv["filter"] || undefined,
  ignore     : typeof argv["ignore"] === "boolean" ? argv["ignore"] : true
}

if(argv._ && argv._ instanceof Array && argv._.length){
  lintpadOptions.files = argv._[0].trim().split(/[\,\s]+/)
}

lintpadOptions.files = lintpadOptions.files.map(input=>{
  return input.indexOf("/") === 0 ? input : path.resolve(cwd, input)
})

runpad(lintpadOptions)
