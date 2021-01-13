import styled from 'styled-components';

export const StyledSignin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 25%;
  height: 25%;
  border: 3px solid yellowgreen;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: 2px solid yellowgreen;
  width: 80%;
  height: 10%;
  background: transparent;
  margin: auto;
  color: yellowgreen;
  font-weight: 800;

  ::placeholder {
    color: yellowgreen
  }
`;

export const StyledButton = styled.button`
  width: 50%;
  height: 10%;
  margin: auto;
  color: yellowgreen;
  background-color: transparent;
  border: 2px solid yellowgreen;
  font-weight: 700;

  :focus {
    background-color: yellowgreen;
    color: white;
    border: none;
  }
`;