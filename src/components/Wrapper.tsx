import type { FC} from "react";
import { ChatBox } from "./ChatBox";
import { ChatBoxInput } from "./ChatBoxInput";
import { Counter } from "./Counter";

export const Wrapper: FC = () => {
  return (
    <div className="Wrapper">
      <Counter />
      <ChatBox />
      <ChatBoxInput />
    </div>
  );
};
