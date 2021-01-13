// IMPORT QUERIES
const { findOnlineUsers } = require('../queries/user.queries');

exports.getUsers = async (chatroom) => {
  const users = await findOnlineUsers();
  chatroom.to('general').emit('getUsers', users);
};