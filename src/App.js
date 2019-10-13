import React from "react";

import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import { Container, MessageContainer } from "./App.styles";

const App = () => {
  return (
    <Container>
      <MessageContainer>
        <MessageList></MessageList>
        <MessageInput></MessageInput>
      </MessageContainer>
    </Container>
  );
};

export default App;
