import styled from 'styled-components';

export const StyledRoom = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  border: 1px solid yellowgreen;
  box-sizing: border-box;
  border-radius: 0 0 24px 24px;

  #scroller {
    
  }
`;

export const StyledMessageArea = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar { width: 0 !important }
`;

export const StyledMessageCurrent = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  p {
    max-width: 45%;
    height: auto;
    word-wrap: break-word;
    margin: 1rem 1rem 1rem auto;
    background-color: #0199ff;
    padding: .8rem 1rem;
    border-radius: 15px;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: white;
  }
`;

export const StyledMessageStranger = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  p {
    max-width: 45%;
    height: auto;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: white;
    background-color: #3f4041;
    padding: .8rem 1rem;
    border-radius: 15px;
    margin: 1em auto 1em 1em;
  }
`;

export const StyledInputArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
    border-radius: 30px;
    background-color: #2e3031;
`;

export const StyledTextArea = styled.textarea`
      width: 79%;
      border: none;
      color: #656667;
      font-size: 1.2rem;
      overflow: auto;
      background-color: #2e3031;
      padding: .8rem 0;
      font-family: "ubuntu";
      resize: none;
      padding-right: 1rem;
      ::-webkit-scrollbar {
        display: none;
      }

      :focus {
        outline: none;
      }

      ::placeholder {
        color: #656667;
        font-size: 1.2rem;
      }
`;

export const StyledSendButton = styled.button`
  width: 9%;
  height: 100%;
`;