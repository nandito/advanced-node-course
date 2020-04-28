const { spawn } = require('child_process')

const child = spawn('wc')

// pipe standard input to the child process
// so what we type in the CLI, it will be processed in the child's `wc`
process.stdin.pipe(child.stdin)

// print the word count when hitting CTRL+D
child.stdout.on('data', data => {
  console.log(`child stdout:\n${data}`)
})
