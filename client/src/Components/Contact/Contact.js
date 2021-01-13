import React, { useState } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledContact, StyledSingleContact, StyledStatus, StyledName, StyledShortcut  } from './Contact.styled';

const Contact = ({ onlineUsers }) => {
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
            <StyledName>{user.username}</StyledName>
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