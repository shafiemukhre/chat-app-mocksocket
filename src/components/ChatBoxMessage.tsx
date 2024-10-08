import { memo, type FC } from "react";

export interface ChatBoxMessageProps {
  id: number;
  username: string;
  text: string;
}

// memo is necessary here. since the the props for the old messages do not change
//   we don't want react to rerender the message box component
export const ChatBoxMessage: FC<ChatBoxMessageProps> = memo(({ username, text }) => {
  return (
    <div className="ChatBoxMessage">
      <div className="ChatBoxMessage__header">
        <span className="ChatBoxMessage__username">{username}</span>
      </div>
      <div className="ChatBoxMessage__content">
        <p className="ChatBoxMessage__text">{text}</p>
      </div>
    </div>
  );
});
