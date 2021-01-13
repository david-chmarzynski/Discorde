import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledContact, StyledSingleContact, StyledStatus, StyledName  } from './Contact.styled';

const Contact = ({ onlineUsers }) => {
  return (
    <StyledContact>
      {onlineUsers && onlineUsers.map(user => (
        <StyledSingleContact>
          <StyledStatus />
          <StyledName>{user.username}</StyledName>
      </StyledSingleContact>
      ))}
    </StyledContact>
  );
};

export default Contact;