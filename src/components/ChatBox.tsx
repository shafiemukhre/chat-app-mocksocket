import { useRef, useEffect, type FC, memo } from "react";
import { ChatBoxMessage } from "./ChatBoxMessage";
import type { IMessage } from "../types";

export const ChatBox: FC<{ messages: IMessage[] }> = memo(({ messages }) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const isScrolledToBottom = useRef(true);

  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (chatBox && isScrolledToBottom.current) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages]);

  const handleScroll = () => {
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      const { scrollTop, scrollHeight, clientHeight } = chatBox;
      isScrolledToBottom.current = scrollTop + clientHeight >= scrollHeight - 10;
    }
  };

  return (
    <div className="ChatBox" ref={chatBoxRef} onScroll={handleScroll}>
      {messages.map((message) => (
        <ChatBoxMessage key={message.id} {...message} />
      ))}
    </div>
  );
});

/*

1. I wrapped the ChatBox component using React.memo, this will prevent 
unnecessary re-renders.

Other performance consideration when dealing with heavy loads:

2. Implement virtualization/windowing technique to only render visible messages 
when user is scrolling. We can use library such as react-window.

3. Implement pagination + infinite scrolling to load history messages in chunk 
when user scrolling up to see the history message. The bi-directional websocket
has to support this as well. We use useRef to track the reference to the oldest
messageID, use IntersectionObserver to detect the oldest message is visible in
screen.

3. Wrap the custom hook in a useCallback to memoize the function.

4. For better UX experience when user is scrolling up and down. We should
implement debouncing using useDebounce to limit the fequency of the scroll
position updates. 

5. Implement something like Zustand's transient update to minimize re-renders.
Zustand allows for selective subscribtions, which means a component will only
re-render when the data it cares about changes. Transient updates ensure that 
only the parts of the UI that rely on new messages are updated, reducing 
re-renders and improving overall responsiveness.
*/