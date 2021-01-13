import React, { useEffect, useState } from 'react';

// IMPORT SOCKET.IO-CLIENT
import io from 'socket.io-client';

// IMPORT STYLED COMPONENTS
import { StyledApp, StyledButton } from './App.styled';

// IMPORT COMPONENTS
import Signin from '../Signin/Signin';
import Alert from '../Alert/Alert';
import Contact from '../Contact/Contact';

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
        <Contact onlineUsers={onlineUsers} />
        </>
      )}
    </StyledApp>
  );
}

export default App;
