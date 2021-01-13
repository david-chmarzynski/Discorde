import styled from 'styled-components';

export const StyledContact = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20%;
  height: 35%;
  display: flex;
  flex-direction: column;
  border: 2px solid yellowgreen;
  border-top: 8px solid yellowgreen;
`;

export const StyledSingleContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledName = styled.p`

`;

export const StyledStatus = styled.div`
  width: 12px;
  height: 12px;
  background-color: green;
  border-radius: 50%;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const StyledShortcut = styled.div`
  background-color: yellowgreen;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;