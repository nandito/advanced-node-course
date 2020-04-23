const EventEmitter = require('events')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = new EventEmitter()
const server = require('./server')(client)

server.on('response', (resp) => {
  // Special command to clear the console
  process.stdout.write('\u001b[3J\u001b[2J\u001b[1J')
  // Write the response
  process.stdout.write(resp)
  // Display a prompt
  process.stdout.write('\n\> ')
})

rl.on('line', (input) => {
  client.emit('command', input)
})