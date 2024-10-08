import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
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
const AddMessageContext = createContext<AddMessageContextType | undefined>(undefined);

export default function ChatContextProvider({ children }: ChatContextProviderProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  // function to add new message either from mock websocket or user submission
  const addMessage = useCallback((message: IMessage) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  return (
    <MessagesContext.Provider value={{ messages }}>
      <AddMessageContext.Provider value={{ addMessage }}>
        {children}
      </AddMessageContext.Provider>
    </MessagesContext.Provider>
  );
}

export function useMessagesContext() {
  const context = useContext(MessagesContext);

  if (context === undefined) {
    throw new Error("useMessagesContext must be used within a ChatContextProvider.");
  }

  return context;
}

export function useAddMessageContext() {
  const context = useContext(AddMessageContext);

  if (context === undefined) {
    throw new Error("useAddMessageContext must be used within a ChatContextProvider.");
  }

  return context;
}