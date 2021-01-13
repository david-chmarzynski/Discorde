import styled from 'styled-components';

export const StyledAlert = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0, .9);
  display: flex;
  justify-content: center;
`;

export const StyledBody = styled.div`
  width: 35%;
  height: 20%;
  border: 1px solid yellowgreen;
`;

export const StyledMessage = styled.p`
  height: 100%;
  width: 100%;
  font-size: 2em;
  color: yellowgreen;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
`;

export const StyledExit = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background-color: white;
`;