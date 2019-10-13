import styled from "styled-components";
import SendImage from "../../assets/send.svg";

export const Container = styled.form`
  flex: 1.5;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const SendButton = styled.button`
  background: url(${SendImage});
  height: 35px;
  background-size: 35px;
  margin-right: 10%;
  width: 35px;
  position: absolute;
  border: none;
  right: 0;

  cursor: pointer;

  transition: all 0.3s;

  opacity: ${({ isEnabled }) => (!isEnabled ? 0 : 1)};
  ${({ isEnabled }) => (!isEnabled ? `pointer-events: none;` : "")}

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    opacity: 0.8;
  }
`;

export const MessageInput = styled.input.attrs({
  placeholder: "Escreva uma mensagem..."
})`
  width: 80%;
  height: 40px;
  color: #adadad;
  font-weight: normal;
  font-size: 12px;
  border-radius: 61.5px;
  border: 1px solid #c7c7c7;
  padding-left: 20px;
`;
