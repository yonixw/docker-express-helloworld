const express = require('express')
const os = require('os');

const PORT = 8080
const app = express()
app.get('/', (req, res) => {
    res.send(`Hellow world! I'm run on ${os.hostname()}. try /echo`)
})
app.get('/echo', (req, res) => {
    res.send([req.headers, req.body, [req.ip].concat(req.ips)])
})
console.log(`Running on http://localhost:${PORT}`)
app.listen(PORT)
