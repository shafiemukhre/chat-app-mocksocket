import { useState, useCallback, memo, type FormEvent, type ChangeEvent, type FC} from 'react';
import type { IMessage } from '../types';
import { useAddMessageContext } from '../contexts/ChatContextProvider';

export const ChatBoxInput: FC = memo(() => {
  // TODO: Allow user to submit their own message to the ChatBox. ✅
  const [message, setMessage] = useState('');
  const { addMessage } = useAddMessageContext();

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: IMessage = {
        id: Date.now(),
        username: 'SHAFIE', // hardcode the username
        text: message.trim()
      };

      addMessage(newMessage); // use ChatContextProvider
      setMessage(''); // reset
    }
  }, [message, addMessage]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
      />
      <button type="submit">Submit</button>
    </form>
  );
});
