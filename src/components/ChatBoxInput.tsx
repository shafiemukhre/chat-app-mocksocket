import { useState } from 'react';
import { SocketEventsEnum } from '../constants';
import type { IMessage } from '../types';

export const ChatBoxInput: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: IMessage = {
        id: Date.now(),
        username: 'SHAFIE', // hardcode the the username
        text: message.trim()
      };

      // dispatch a custom event to simulate sending a message
      const event = new CustomEvent(SocketEventsEnum.MESSAGE_RECEIVED, { detail: newMessage });
      document.dispatchEvent(event);

      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};
