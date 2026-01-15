const os = require('os')
const fs = require('fs')

setInterval(() => {
  const info = `
CPU: ${os.cpus().length}
Memory: ${os.totalmem() - os.freemem()}
Platform: ${os.platform()}
-------------------
`
  fs.appendFile('system.log', info, () => {})
}, 5000)
