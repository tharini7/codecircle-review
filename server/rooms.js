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

    const existing = room.scholars.find(s => s.name.toLowerCase() === name.toLowerCase());

    if (existing) {
        existing.id = scholarId; // same person reconnecting, new socket id
    } else {
        room.scholars.push({ id: scholarId, name });
    }

    return room;
}

function removeScholar(scholarId) {
    let updatedRoom = null;
    rooms.forEach((room) => {
        const index = room.scholars.findIndex(s => s.id === scholarId);
        if (index !== -1) {
            room.scholars.splice(index, 1);
            updatedRoom = room;
        }
    });
    return updatedRoom;
}
function deleteRoom(code) {
  rooms.delete(code);
}

module.exports = { createRoom, getRoom, addScholar,  removeScholar ,deleteRoom };
