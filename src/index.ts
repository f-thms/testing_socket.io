import express from 'express'
import { Socket } from 'socket.io'

const port = 2000
const app: express.Application = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const colorRed = '\u001b[31m'
const colorYellow = '\u001b[34m'
const colorGreen = '\u001b[32m'
const colorReset = '\u001b[0m'

app.get('/', (req, res) => {
    res.sendFile(__dirname.substring(0, (__dirname.length - 4)) + "html\\index.html")
})

io.on('connection', (socket: Socket) => {

    let nick: string = socket.id.substring(0, 4).toUpperCase()
    io.emit('connection change', nick + " joined the chat")
    console.log('Socket connected:      ' + colorGreen + socket.id + colorReset)
 
    socket.on('chat message', (msg) => {
        if(msg != ""){ 
            io.emit('chat message', nick + ": " + msg)
        }
    })

    socket.on('disconnect', () => { 
        io.emit('connection change', nick + " left the chat")
        console.log('Socket disconnected:   ' + colorRed + socket.id + colorReset)
    })
})

http.listen(port, () => {
    console.log('Listening on port:     ' + colorYellow + port + colorReset)
})
