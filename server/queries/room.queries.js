const Room = require('../models/room.model');

exports.findRoomByUsersId = (userId, id) => {
  return Room.find({$and: [{"users":  userId}, {"users": id }]}).exec();
};

exports.findRoomById = (roomId) => {
  return Room.findById(roomId).exec();
};

// exports.createRoomByUsersId = (userId, id) => {
//   return Room.
// };