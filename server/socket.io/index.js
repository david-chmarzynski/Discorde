const socketio = require('socket.io');
const { server } = require('../server');

// IMPORT CONTROLLERS
const { signin, signout, disconnect } = require('../controllers/auth.controller');
const { getUsers } = require('../controllers/user.controller');
const { joinRoom } = require('../controllers/room.controller');

// ENTRY POINT NAMESPACE
const ios = socketio(server);

// OTHER NAMESPACES
const chatroom = ios.of('/chatroom');

ios.on('connect', (socket) => {

  signin(socket);

});

chatroom.on('connect', (socket) => {
  socket.join('general');
  getUsers(chatroom);
  signout(socket, chatroom);
  joinRoom(socket, chatroom);

  socket.on('disconnect', () => {
    disconnect(socket, chatroom);
    console.log(socket.rooms);
  });
});
