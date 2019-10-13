import styled from "styled-components";

export const Container = styled.ul`
  flex: 8.5;
  margin-top: 40px;
  overflow-y: scroll;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  padding-left: 30px;
`;

export const MessageBox = styled.li`
  max-width: 70%;
  min-width: 200px;
  flex-wrap: 1;
  padding: 20px;
  background: white;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  position: relative;
  margin-top: 20px;

  transition: all 1s;

  &:hover {
    transform: scale(1.07)
  }

  &:first-child {
    margin-top: 10px;
  }

  &::before {
    content: "";
    border-style: solid;
    border-width: 10px 15px 10px 0;
    border-color: transparent white transparent transparent;
    position: absolute;
    left: -13px;
  }
`;

export const MessageText = styled.span`
  word-break: break-all;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  color: #adadad;
`;
