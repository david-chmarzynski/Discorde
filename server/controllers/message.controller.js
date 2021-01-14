// IMPORT QUERIES
const { findUserById } = require('../queries/user.queries');
const { createMessage, getMessagesByRoomId } = require('../queries/message.queries');
const { findRoomById } = require('../queries/room.queries');

exports.sendMessage = (socket, chatroom) => {
  socket.on('sendMessage', async ({message, userId, roomId}, callback) => {
    try {
      const user = await findUserById(userId);
      if(user) {
        const authorName = user.username;
        let res = await createMessage(message, userId, authorName, roomId);
        let messages = await getMessagesByRoomId(roomId);
        let room = await findRoomById(roomId);
        chatroom.to(`${room.title}`).emit('getMessages', messages);
        callback(res);
      } else {
        let res = {
          status: 404,
          message: "Vous n'êtes pas autorisé à envoyer de message"
        };
        callback(res);
      }
    } catch (error) {
      throw error;
    }
  });
};