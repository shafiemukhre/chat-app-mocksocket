export interface ChatBoxMessageProps {
  id: number;
  username: string;
  text: string;
}

export const ChatBoxMessage: React.FC<ChatBoxMessageProps> = ({ username, text }) => {
  return (
    <div className="ChatBoxMessage">
      <div className="ChatBoxMessage__header">
        <span className="ChatBoxMessage__username">{username}</span>
        <span className="ChatBoxMessage__timestamp">{new Date().toLocaleTimeString()}</span>
      </div>
      <div className="ChatBoxMessage__content">
        <p className="ChatBoxMessage__text">{text}</p>
      </div>
    </div>
  );
};
