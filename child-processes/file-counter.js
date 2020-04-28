const { spawn } = require('child_process')

// find all files in this directory
const find = spawn('find', ['.', '-type', 'f'])
// count the lines on the stdoutput
const wc = spawn('wc', ['-l'])

// pipe the find command's result to the wc command
find.stdout.pipe(wc.stdin)

wc.stdout.on('data', data => {
  console.log(`Number of files: ${data}`)
})
