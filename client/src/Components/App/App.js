import React, { useEffect, useState } from 'react';

// IMPORT SOCKET.IO-CLIENT
import io from 'socket.io-client';

// IMPORT STYLED COMPONENTS
import { StyledApp, StyledButton } from './App.styled';

// IMPORT COMPONENTS
import Signin from '../Signin/Signin';
import Alert from '../Alert/Alert';
import Contact from '../Contact/Contact';
import Room from '../Room/Room';

// SOCKETS
let ios;
let chatroom;

const App = () => {
  // STATES
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [userId, setUserId] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState();
  const [roomId, setRoomId] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // MAIN NAMESPACE CONNEXION
  useEffect(() => {
    ios = io();
  }, []);

  // CHATROOM CONNEXION
  useEffect(() => {
    if(isOnline) {
      chatroom = io('/chatroom');

      chatroom.on('connect', () => {

        chatroom.on('getUsers', (res) => {
          setOnlineUsers(res);
        });

        chatroom.on('getMessages', (res) => {
          setMessages(res);
        });
      });
    };
  }, [isOnline]);

  const signin = (e) => {
    e.preventDefault();
    const ids = { username, password };
    ios.emit('signin', ids, (res) => {
      if(res.status === 200) {
        setIsOnline(true);
        setAlert(true);
        setAlertMessage(res.message);
        setUserId(res.user_id);
      } else {
        setAlert(true);
        setAlertMessage(res.message);
      }
    });
  };

  const signout = (e) => {
    e.preventDefault();
    const id = userId;
    chatroom.emit('signout', id, (res) => {
      if(res.status === 200) {
        setIsOnline(false);
        setAlert(true);
        setAlertMessage(res.message);
        setUserId("");
      } else {
        setAlert(true);
        setAlertMessage(res.message);
      }
    })
  };

  const joinRoom = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const ids = {userId, id};
    chatroom.emit('joinRoom', ids, (res) => {
      console.log(res);
      setRoomId([res.roomId]);
      setMessages(res.messages);
    });
  };
  
  const sendMessage = (e) => {
    e.preventDefault();
    const datas = {message, userId, roomId};
    chatroom.emit('sendMessage', datas, (res) => {
      console.log("Sended Message");
      console.log(res);
      setMessage('');
    });
  };
  
  return (
    <StyledApp>
      {!isOnline && (
        <Signin 
          signin={signin}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
      {alert && (
        <Alert
          message={alertMessage}
          setAlert={setAlert}
        />
      )}
      {isOnline && (
        <>
        <StyledButton onClick={e => signout(e)}>Signout</StyledButton>
        <Contact onlineUsers={onlineUsers} joinRoom={joinRoom}/>
        </>
      )}
      {roomId && (
        roomId.map(room => (
          <Room
            message={message}
            messages={messages}
            userId={userId}
            sendMessage={sendMessage}
            setMessage={setMessage}
            roomId={room}
        />
        ))
      )}
    </StyledApp>
  );
}

export default App;
