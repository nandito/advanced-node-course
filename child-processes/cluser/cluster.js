const cluster = require('cluster')
const os = require('os')

// the first time we load this file, we execute the master process
if (cluster.isMaster) {
  const cpus = os.cpus().length

  console.log(`Forking for ${cpus} CPUs`)
  for (i = 0; i < cpus; i++) {
    cluster.fork()
  }
}
// when the `cluster.fork` is executed in the master process, the current main
// module (cluster.js) runs again, but in "worker mode"
// (`isMaster = false`; `isWorker = true`)
else {
  require('./server')
} 