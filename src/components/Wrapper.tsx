import type { FC} from "react";
import { ChatBox } from "./ChatBox";
import { ChatBoxInput } from "./ChatBoxInput";
import { Counter } from "./Counter";
import React from "react";

export const Wrapper: FC = React.memo(() => {
  return (
    <div className="Wrapper">
      <Counter />
      <ChatBox />
      <ChatBoxInput />
    </div>
  );
});
