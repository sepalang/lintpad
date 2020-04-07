const { CLIEngine } = require('eslint')

module.exports = function lint ({ 
  files,
  cwd, 
  fix, 
  //parser, 
  silent, 
  mode, 
  useEslintrc,
  ignore,
  filter
}){
  //
  if(!files) files = ['src', 'tests', '*.js']
  // mode
  mode = (()=>{
    switch (mode){
      case "node": case "babel": case "lib": case "stage": case "stage-1": case "env":
        return "stage-1"
        break
      case "app": case "web": case "stage-0": default:
        return "stage-0"
        break
    }
  })()
  
  const ignorePattern = ['node_modules/**/*']
  
  if(typeof filter === "string"){
    filter
    .split(/\s+/)
    .filter(s=>s)
    .map(s=>{
      const sr = /^([\!]+)(.*)/.exec(s)
      return sr ? sr[2] : `!${s}`
    })
    .forEach(s=>{
      ignorePattern.push(s)
    })
  }
  
  //preset
  const presets = require('./eslintPresets')
  const lintConfig = presets.getConfig({ mode })
  const extensions = presets.getExtensions()

  //config
  const config = Object.assign({
    allowInlineConfig: true,
    baseConfig       : lintConfig,
    globals          : [
      "describe",
      "it",
      "expect"
    ],
    extensions,
    fix,
    cwd,
    useEslintrc,
    ignore,
    ignorePattern
  })
  
  //console.log("lintpad executed!\n", `${files}\n`, config)
  
  const engine = new CLIEngine(config)
  const report = engine.executeOnFiles(files)
  const formatter = engine.getFormatter('codeframe')

  if(fix){
    CLIEngine.outputFixes(report)
  }

  const maxErrors = 10
  const maxWarnings = 10
  const isErrorsExceeded = report.errorCount > maxErrors
  const isWarningsExceeded = report.warningCount > maxWarnings

  if(!isErrorsExceeded && !isWarningsExceeded){
    if(!silent){
      const hasFixed = report.results.some(f=>f.output)
      if(hasFixed){
        console.log(`The following files have been auto-fixed:`)
        console.log()
        report.results.forEach(f=>{
          if(f.output){
            console.log(`${require('path').relative(cwd, f.filePath)}`)
          }
        })
        console.log()
      }
      if(report.warningCount || report.errorCount){
        console.log(formatter(report.results))
      } else {
        console.log(hasFixed ? `All lint errors auto-fixed.` : `No lint errors found!`)
      }
    }
  } else {
    console.log(formatter(report.results))
    if(isErrorsExceeded && typeof maxErrors === 'number'){
      console.log(`Eslint found too many errors (maximum: ${maxErrors}).`)
    }
    if(isWarningsExceeded){
      console.log(`Eslint found too many warnings (maximum: ${maxWarnings}).`)
    }
    process.exit(1)
  }
}
