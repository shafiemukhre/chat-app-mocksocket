import "./styles.css";
import "./socket";
import { SocketEventsEnum } from "./constants";
import { useEffect } from "react";
import { Wrapper } from "./components/Wrapper";
import type { IMessage } from "./types";
import { useMessageActions } from "./contexts/ChatContextProvider";

// App component is expected to rerender when the context is updated. no need React.memo
// interesting that React scan can't see the App component's being rerender but React Devtools can
export default function App() {
  const { addMessage } = useMessageActions();

  useEffect(() => {
    // TODO: Subscribe to messages
    const handleMessageReceived = (event: CustomEvent<IMessage>) => {
      addMessage(event.detail);
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
  }, [addMessage]);

  return (
    <div className="App">
      <h1>Chat App</h1>
      <Wrapper/>
    </div>
  );
}
