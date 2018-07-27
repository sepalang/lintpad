const { CLIEngine } = require('eslint')

module.exports = function lint ({ 
  files, 
  cwd, 
  fix, 
  parser, 
  silent, 
  mode, 
  useEslintrc,
  ignore
}){
  //
  if(!files) files = ['src', 'tests', '*.js']
  
  //preset
  const presets = require('./eslintPresets')
  const lintConfig = presets.getConfig({ mode })
  const extensions = presets.getExtensions()
  
  //config
  const config = Object.assign({
    allowInlineConfig: true,
    baseConfig       : lintConfig,
    extensions,
    fix,
    cwd,
    useEslintrc,
    ignore
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
