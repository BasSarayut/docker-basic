const express = require('express')
const app = express()
const port = 8000

let conn = null
const initMySQL = async () => {
    conn = await mysql.createConnection({
      host: 'db', // หรือใส่เป็น localhost ก็ได้
      user: 'root',
      password: 'root',
      database: 'tutorial'
    })
  }

app.get('/hello-world', (req, res) => {
  res.send('hello world')
})

app.listen(port, async () => {
    await initMySQL()
  console.log(`Server running at http://localhost:${port}/`)
})