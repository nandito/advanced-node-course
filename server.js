const EventEmitter = require('events')

class Server extends EventEmitter {
  constructor(client) {
    super()

    // we need to set this emitter on the next process tick
    // because server.on('response', cb) is defined AFTER this in the client.js
    // so our handler for this `response` event will be not defined yet.
    process.nextTick(() => {
      this.emit('response', ('Type a command (help to list commands'))
    })

    client.on('command', (command) => {
      switch (command) {
        case 'help':
        case 'add':
        case 'ls':
        case 'delete':
          this[command]()
          break
      
        default:
          this.emit('response', 'Unknown command')
          break;
      }
    })
  }

  help() {
    this.emit('response', 'help...')
  }

  add() {
    this.emit('response', 'add...')
  }

  ls() {
    this.emit('response', 'ls...')
  }

  delete() {
    this.emit('response', 'delete...')
  }
}

module.exports = (client) => new Server(client)