// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url == '/') {
//         console.log('hello from server')
//         res.statusCode = 200
//         res.end()
//     }
// })

// server.listen(3001, () => {
//     console.log('server on http://localhost:3001')
// })

import * as dotenv from 'dotenv'
dotenv.config()

import app from './server'

app.listen(3001, () => {
    console.log('hello on http://localhost:3001')
})