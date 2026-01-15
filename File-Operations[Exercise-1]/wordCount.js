const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) return

  const count = data.trim().split(/\s+/).length

  fs.writeFile('output.txt', String(count), () => {})
})
