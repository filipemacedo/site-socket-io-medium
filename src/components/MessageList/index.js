import React, { useState, useEffect } from "react";

import { MessageBox, Container, MessageText } from "./message-list.styles";
import {
  onWriteMessage,
  removeWriteMessageListener
} from "../../socket/messages.socket";

/**
 * Fn responsável por criar
 * os listeners do socket
 * @param {Function} pushMessage 
 */
const socketEvents = ({ pushMessage }) => {
  onWriteMessage(pushMessage);
};

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pushMessage = ({ message }) => setMessages([message, ...messages]);

    socketEvents({ pushMessage });

    return () => removeWriteMessageListener();
  }, [messages]);

  return (
    <Container>
      {messages.map(message => (
        <MessageBox>
          <MessageText>{message}</MessageText>
        </MessageBox>
      ))}
    </Container>
  );
};

export default MessageList;
