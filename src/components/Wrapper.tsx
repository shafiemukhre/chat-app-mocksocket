import type { FC } from "react";
import { ChatBox } from "./ChatBox";
import { ChatBoxInput } from "./ChatBoxInput";
import { Counter } from "./Counter";
import type { IMessage } from "../types";

export const Wrapper: FC<{ messages: IMessage[] }> = ({ messages }) => {
  // TODO: Make counter show current number of messages received. ✅
  return (
    <div className="Wrapper">
      <Counter number={messages.length} />
      <ChatBox messages={messages} />
      <ChatBoxInput />
    </div>
  );
};
