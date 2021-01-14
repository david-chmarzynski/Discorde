import React, { useEffect, useRef } from 'react';

// IMPORT STYLED COMPONENTS
import {
  StyledRoom,
  StyledMessageArea,
  StyledMessageCurrent,
  StyledInputArea,
  StyledTextArea,
  StyledSendButton,
  StyledMessageStranger
} from './Room.styled';

// IMPORT MUI COMPONENTS
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


const Room = ({ message, messages, userId, sendMessage, setMessage, roomId }) => {
  const ref = useRef(null);

  const scrollToBottom = () => {
    console.log("should scroll")
    ref.current.scrollTo({ 
      behavior: "smooth",
      top: document.getElementById('scroller').scrollHeight
    });
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <StyledRoom>
      <StyledMessageArea ref={ref} id="scroller">
        {messages.map(message => {
          return message.room === roomId && message.author === userId ? <StyledMessageCurrent><p>{message.data}</p></StyledMessageCurrent> : 
          message.room === roomId && message.author !== userId ? <StyledMessageStranger><p>{message.data}</p></StyledMessageStranger> : null
        })}
      </StyledMessageArea>
      <StyledInputArea>
        <StyledTextArea
          name=""
          id=""
          cols="20"
          rows="1"
          wrap="hard"
          placeholder="Ecrivez votre message..."
          value={message}
          onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null}
          onChange={e => setMessage(e.target.value)}
        />
        <IconButton>
          <SendIcon onClick={e => sendMessage(e)} />
        </IconButton>
      </StyledInputArea>
    </StyledRoom>
  );
};

export default Room;