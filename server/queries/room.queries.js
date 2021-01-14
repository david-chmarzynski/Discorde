const Room = require('../models/room.model');

exports.findRoomByUsersId = (userId, id) => {
  return Room.find({ "users":  userId && id}).exec();
};

// exports.createRoomByUsersId = (userId, id) => {
//   return Room.
// };