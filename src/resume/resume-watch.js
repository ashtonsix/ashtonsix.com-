const chokidar = require('chokidar')
const generateResume = require('./resume-build')

const debounce = (f, ms = 100) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => f(...args), ms)
  }
}

chokidar.watch(__dirname).on(
  'all',
  debounce(async (e, path) => {
    console.log()
    console.log(e, path)
    process.stdout.write('generating resume... ')
    await generateResume()
    console.log('done')
  })
)
