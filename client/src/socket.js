import {io} from 'socket.io-client';

const socket = io("https://codecircle-review.onrender.com/");

export default socket;