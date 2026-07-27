import {io} from 'socket.io-client';

const socket = io("https://codecircle-review.onrender.com/");

//const socket = io("http://localhost:3000");
export default socket;