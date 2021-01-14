// IMPORT QUERIES
const { findUserByUsername, setUserOnline, setUserOffline, findUserBySocketId } = require('../queries/user.queries');

const { getUsers } = require('../controllers/user.controller');

exports.signin = (socket) => {
  socket.on('signin', async ({username, password}, callback) => {
    try {
      const user = await findUserByUsername(username);
      if(user) {
        const match = await user.comparePasswords(password, user.password);
        if(match) {
          await setUserOnline(user._id, socket.conn.id);
          let res = {
            status: 200,
            message: "Connexion granted",
            username: user.username,
            user_id: user._id
          };
          callback(res);
        } else {
          let res = {
            status: 403,
            message: "Wrong username or password"
          };
          callback(res);
        }
      } else {
        let res = {
          status: 403,
          message: "Wrong username or password"
        };
        callback(res);
      }
    } catch (error) {
      throw error;
    }
  });
};

exports.signout = (socket, chatroom) => {
  socket.on('signout', async (userId, callback) => {
    try {
      await setUserOffline(userId);
      let res = {
        status: 200,
        message: "Signed Out",
      };
      getUsers(chatroom);
      callback(res);
    } catch (error) {
      throw error;
    }
  });
};

exports.disconnect = async (socket, chatroom) => {
  let user = await findUserBySocketId(socket.conn.id);
  await setUserOffline(user._id);
  getUsers(chatroom);
};