import type { FC } from "react";
import { ChatBoxMessage } from "./ChatBoxMessage";
import { useMessagesContext } from "../contexts/ChatContextProvider";

// ChatBox component is expected to rerenders when the context is updated, React.memo not needed
export const ChatBox: FC = () => {
  // TODO: Fill the ChatBox with messages. ✅
  // TODO: Keep the ChatBox scrolled to the last message unless user scrolls up. ✅
  const { messages } = useMessagesContext();

  return (
    <div className="ChatBox">
      <div className="ChatBox__inner">
        {messages.map((message) => (
          <ChatBoxMessage key={message.id} {...message} />
        ))}
      </div>
    </div>
  );
};

ChatBox.displayName = 'ChatBox';