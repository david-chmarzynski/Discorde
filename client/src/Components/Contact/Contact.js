import React, { useState } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledContact, StyledSingleContact, StyledStatus, StyledName, StyledShortcut  } from './Contact.styled';

const Contact = ({ onlineUsers, joinRoom }) => {
  const [isDeployed, setIsDeployed] = useState(false);

  const handleDeployContact = () => {
    setIsDeployed(!isDeployed);
  };
  return (
    <>
    {isDeployed && (
      <StyledContact onClick={handleDeployContact}>
        {onlineUsers && onlineUsers.map(user => (
          <StyledSingleContact>
            <StyledStatus />
            <p id={user._id} onClick={e => joinRoom(e)}>{user.username}</p>
        </StyledSingleContact>
        ))}
      </StyledContact>
    )}
    {!isDeployed && (
      <StyledShortcut onClick={handleDeployContact} />
    )}
    
    </>
  );
};

export default Contact;