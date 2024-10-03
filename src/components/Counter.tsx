import type { FC } from "react";

type Props = {
  number?: number;
};

export const Counter: FC<Props> = ({ number }) => {
  // TODO: Make Counter display number of messages. ✅
  return <div className="Counter">We have {number ?? "??"} messages</div>;
};
