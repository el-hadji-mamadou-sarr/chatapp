const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

app.use(cors({
        origin: 'http://localhost:3000',
}));

const {Server} = require('socket.io');
const io = new Server(server, {
        cors:{
                origin:'http://localhost:3000'
        }
});

io.on('connection', (Socket) =>{
        Socket.on('message', (message)=>{
                io.emit('message', message);
        })
})      

server.listen(5000, ()=>{
        console.log('server is running on port 5000');
})