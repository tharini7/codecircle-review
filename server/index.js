const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const { createRoom, getRoom, addScholar, deleteRoom } = require('./rooms');
const activities = require('./activities');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(cors());  
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, { 
    cors:{
        origin:'http://localhost:5173',
        methods: ['GET', 'POST']}
 });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    //something here onece server is up
    console.log('server running on:', PORT);
});

io.on('connection', (socket) => {
    //runs wehn brwosr tab connects
    console.log('connected socket id:', socket.id);

    socket.on('create-room', () => {
        const room = createRoom(socket.id);
        socket.join(room.code);
        socket.emit('room-created', room);
    })

    socket.on('join-room', ({ code, name }) => {
        const room = addScholar(code, socket.id, name);

        if(!room){
            socket.emit('join-error', 'room not found');
            return;
        }

        socket.join(code);
        socket.emit('joined-room', room);
        io.to(code).emit('scholar-join', room.scholars);
    });

    socket.on('next-activity', ({ code }) => {
        const room = getRoom(code);
        if (!room) return;

        room.currentActivityIndex++;
        room.responses = [];

        const activity = activities[room.currentActivityIndex];
        io.to(code).emit('activity-started', activity);
    });

    socket.on('submit-answer', ({ code, answer }) => {
        const room = getRoom(code);
    if (!room) return;

    const scholar = room.scholars.find(s => s.id === socket.id);
    const scholarName = scholar ? scholar.name : 'Unknown';

    const existingIndex = room.responses.findIndex(r => r.scholarId === socket.id);

    if (existingIndex !== -1) {
        room.responses[existingIndex].answer = answer; // update their existing response
    } else {
        room.responses.push({ scholarId: socket.id, name: scholarName, answer });
    }

    io.to(code).emit('responses-updated', room.responses);
    });

    socket.on('reveal-answer', ({ code }) => {
        const room = getRoom(code);
        if (!room){
            return;
        }

        const activity = activities[room.currentActivityIndex];
        io.to(code).emit('answer-revealed', activity.sampleAnswer);
    });

    socket.on('end-room', ({ code }) => {
    io.to(code).emit('room-ended');
    deleteRoom(code);
});

});