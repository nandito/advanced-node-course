const { spawn } = require('child_process')

// find all files in the parent directory
spawn('find . -type f', {
  stdio: 'inherit',
  shell: true,
  cwd: '../'
})
