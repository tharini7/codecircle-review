const rooms = new Map();

function generateRoomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++){
        code += chars[Math.floor(Math.random()* chars.length)];
    }
    return code;
}

function createRoom(hostSocketId){
    let code = generateRoomCode();
    while(rooms.has(code)){
        code = generateRoomCode();
    }

    const room = {
        code,
        hostId: hostSocketId,
        scholars: [],
        currentActivityIndex: -1,
        responses: []
    };
    rooms.set(code, room);
    return room;
}

function getRoom(code){
    return rooms.get(code);
}

function addScholar(code, scholarId, name){
    const room = getRoom(code);
    if (!room){
        return null;
    }
    const roomScholar = {
        scholarId,
        name
    };
    room.scholars.push(roomScholar);
    return room;
}

module.exports = { createRoom, getRoom, addScholar };
