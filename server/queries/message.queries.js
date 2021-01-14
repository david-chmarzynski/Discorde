const Message = require('../models/message.model');

exports.getMessagesByRoomId = (id) => {
  return Message.find({ "room": id }).exec();
};