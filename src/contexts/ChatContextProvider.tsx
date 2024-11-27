import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import type { IMessage } from "../types";

interface MessagesContextType {
  messages: IMessage[];
}

interface AddMessageContextType {
  addMessage: (message: IMessage) => void;
}

interface ChatContextProviderProps {
  children: ReactNode;
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);
// const AddMessageContext = createContext<AddMessageContextType | undefined>(undefined);

// Separate stable actions into their own context
const MessageActionsContext = createContext<{
  addMessage: (message: IMessage) => void;
} | undefined>(undefined);

export default function ChatContextProvider({ children }: ChatContextProviderProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  // function to add new message either from mock websocket or user submission
  // const addMessage = useCallback((message: IMessage) => {
  //   setMessages((prevMessages) => [...prevMessages, message]);
  // }, []);

  // Create a stable reference to the actions object
  const messageActions = useMemo(() => ({
    addMessage: (message: IMessage) => {
      setMessages(prev => [...prev, message]);
    }
  }), []);

  return (
    <MessageActionsContext.Provider value={messageActions}>
      <MessagesContext.Provider value={{ messages }}>
        {children}
      </MessagesContext.Provider>
    </MessageActionsContext.Provider>
  );
}

export function useMessagesContext() {
  const context = useContext(MessagesContext);

  if (context === undefined) {
    throw new Error("useMessagesContext must be used within a ChatContextProvider.");
  }

  return context;
}

// Add a new hook for actions only
export function useMessageActions() {
  const context = useContext(MessageActionsContext);
  if (context === undefined) {
    throw new Error("useMessageActions must be used within a ChatContextProvider");
  }
  return context;
}

// export function useAddMessageContext() {
//   const context = useContext(AddMessageContext);

//   if (context === undefined) {
//     throw new Error("useAddMessageContext must be used within a ChatContextProvider.");
//   }

//   return context;
// }