import { memo, type FC } from "react";

export interface ChatBoxMessageProps {
  id: number;
  username: string;
  text: string;
}

// memo is NECESSARY here. since the the props for the old messages do not change
//   we don't want react to rerender the message box component
// without React.memo, all ChatBoxMessage components will be rerender even though props remains the same.
//    we don't want that. So by adding React.memo, old ChatBoxMessage will not be rerender
//    because their props remains the same
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

ChatBoxMessage.displayName = 'ChatBoxMessage';