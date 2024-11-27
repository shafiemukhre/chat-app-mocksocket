import type { FC} from "react";
import { ChatBox } from "./ChatBox";
import { ChatBoxInput } from "./ChatBoxInput";
import { Counter } from "./Counter";

// Wrapper is just a div element with no access to context. it will not rerender, React.memo not needed
export const Wrapper: FC = () => {
  return (
    <div className="Wrapper">
      <Counter />
      <ChatBox />
      <ChatBoxInput />
    </div>
  );
};

Wrapper.displayName = 'Wrapper';