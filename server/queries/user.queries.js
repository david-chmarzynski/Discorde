const User = require('../models/user.model');

exports.findUserByUsername = (username) => {
  return User.findOne({ "username": username }).exec();
};

exports.setUserOnline = (userId, socketId) => {
  return User.findOneAndUpdate({ "_id": userId }, {$set: { "isOnline": true, "isAuthenticated": true, "socket_id": socketId }}).exec();
};

exports.setUserOffline = (userId) => {
  return User.findOneAndUpdate({ "_id": userId }, {$set: { "isOnline": false, "isAuthenticated": false , "socket_id": "" }}).exec();
};

exports.findOnlineUsers = () => {
  return User.find({ "isOnline": true }).exec();
};

exports.findUserBySocketId = (socketId) => {
  return User.findOne({ "socket_id": socketId }).exec();
};

exports.findUserById = (userId) => {
  return User.findOne({ "_id": userId }).exec();
};