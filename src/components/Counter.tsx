import type { FC} from "react";
import { useMessagesContext } from "../contexts/ChatContextProvider";

export const Counter: FC = () => {
  // TODO: Make Counter display number of messages. ✅
  const { messages } = useMessagesContext();
  const number = messages.length;
  
  return <div className="Counter">We have {number ?? "??"} messages</div>;
};
