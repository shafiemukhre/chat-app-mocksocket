import "./styles.css";
import "./socket";
import { SocketEventsEnum } from "./constants";
import { useState, useEffect } from "react";
import { Wrapper } from "./components/Wrapper";
import type { IMessage } from "./types";


export default function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const handleMessageReceived = (event: CustomEvent<IMessage>) => {
      setMessages((prevMessages) => [...prevMessages, event.detail]);
    };

    document.addEventListener(
      SocketEventsEnum.MESSAGE_RECEIVED,
      handleMessageReceived as EventListener
    );

    return () => {
      document.removeEventListener(
        SocketEventsEnum.MESSAGE_RECEIVED,
        handleMessageReceived as EventListener
      );
    };
  }, []);

  return (
    <div className="App">
      <h1>Firework Chat</h1>
      <Wrapper messages={messages} />
    </div>
  );
}

/*
- virtualized list
- zustand transient 


*/
