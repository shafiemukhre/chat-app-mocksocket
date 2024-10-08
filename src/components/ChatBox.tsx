import type { FC } from "react";
import { ChatBoxMessage } from "./ChatBoxMessage";
import { useMessagesContext } from "../contexts/ChatContextProvider";

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