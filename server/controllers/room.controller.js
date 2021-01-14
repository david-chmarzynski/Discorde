// IMPORT QUERIES
const { findRoomByUsersId } = require('../queries/room.queries');
const { getMessagesByRoomId } = require('../queries/message.queries');
const Room = require('../models/room.model');

exports.joinRoom = (socket, chatroom) => {
  socket.on('joinRoom', async ({id, userId}, callback) => {
    try {
      let room = await findRoomByUsersId(userId, id);
      if(room.length > 0) {
        socket.join(`${room[0].title}`);
        let messages = await getMessagesByRoomId(room[0]._id);
        let res = {
          status: 200,
          message: "Vous avez rejoint une room existante",
          title: room[0].title,
          roomId: room[0]._id,
          messages: messages
        };
        console.log(room[0].title);
        callback(res);
      } else {
        let newRoom = new Room({
          title: "heeep",
          index: 1,
          users: [
            userId,
            id
          ]
        });
        newRoom.save();
        socket.join(`${newRoom.title}`);
        let messages = await getMessagesByRoomId(newRoom._id);
        let res = {
          status: 200,
          message: "Vous avez ouvert une nouvelle room",
          title: newRoom.title,
          roomId: newRoom._id,
          messages: messages
        };
        callback(res);
      }
    } catch (error) {
      throw error;
    }
    
  });
};