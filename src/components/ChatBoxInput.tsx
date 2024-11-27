import { useState, useCallback, type FormEvent, type ChangeEvent, type FC} from 'react';
import type { IMessage } from '../types';
import { useMessageActions } from '../contexts/ChatContextProvider';

// there's no need for React.memo here
// we prevent the rerender by creating a separate context to add the message
//  so, even when the context is updated with new message, this component 
//  will not necessarily rerender because it is not using the that context

export const ChatBoxInput: FC = () => {
  // TODO: Allow user to submit their own message to the ChatBox. ✅
  const [message, setMessage] = useState('');
  const { addMessage } = useMessageActions();

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: IMessage = {
        id: Date.now(),
        username: 'SHAFIE', // hardcode the username
        text: message.trim()
      };
      
      addMessage(newMessage);
      setMessage('');
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
};

// Add display name for debugging
ChatBoxInput.displayName = 'ChatBoxInput';