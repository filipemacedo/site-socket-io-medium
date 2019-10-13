import React, { useState } from "react";

import { handleSubmit } from "./message-input.handles";
import {
  Container,
  SendButton,
  MessageInput as Input
} from "./message-input.styles";

const MessageInput = () => {
  // estado para armazenar a mensagem
  const [message, setMessage] = useState("");

  // fn para resetar a mensagem
  const clear = () => setMessage("");

  // armazenamos a mensagem e o clear
  // na memória e retornamos uma fn
  // [currying]
  const handleSubmitMessage = handleSubmit({ message, clear });

  return (
    <Container onSubmit={handleSubmitMessage}>
      <SendButton isEnabled={message.length}></SendButton>
      <Input
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
    </Container>
  );
};

export default MessageInput;
