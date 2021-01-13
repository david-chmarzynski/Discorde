import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledAlert, StyledBody, StyledMessage, StyledExit } from './Alert.styled';

const Alert = ({ message, setAlert }) => {
  const closeAlert = () => {
    setAlert(false);
  }
  return (
    <StyledAlert>
      <StyledBody>
        <StyledMessage>
          <StyledExit onClick={closeAlert} />
          {message}
        </StyledMessage>
      </StyledBody>
    </StyledAlert>
  );
};

export default Alert;