import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledRoom } from './Room.styled';

const Room = ({ messages, userId }) => {
  return (
    <StyledRoom>
      {messages.map(message => (
        <p>{message.data}</p>
      ))}
    </StyledRoom>
  );
};

export default Room;