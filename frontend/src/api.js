import openSocket from 'socket.io-client';
const socket = openSocket('http://10.104.86.58:3000/');

const subscribeToCanvas = cb => {
  socket.emit('paper/connection', 'andy', cb);
  //socket.on('paper/update', )
};

const addPathToCanvas = path => {
  socket.emit('paper/add_path', path);
};

const clearAll = () => {
  socket.emit('paper/clear');
};

const undoPath = id => {
  socket.emit('paper/delete_path', id);
};

export { subscribeToCanvas, addPathToCanvas, clearAll, undoPath };
