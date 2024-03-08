import ChevronUpCircleIcon from "./svgs/chevron-up-circle-icon";
import ChevronDownCircleIcon from "./svgs/chevron-down-circle-icon";
import React from "react";

interface FaqBoxProps {
  open?: boolean;
  closed?: boolean;
  children?: React.ReactNode;
}

export default function FaqBox({open, closed, children}: FaqBoxProps) {
  if (open && closed) {
    throw new Error("FaqBox can't be both open and closed");
  }

  if (!open && !closed) {
    closed = true;
  }

  return (
    <div className="bg-white max-w-[858px] w-full justify-between items-start rounded-[8px] p-6 flex gap-[78px]">
      <div className="flex flex-col gap-6">
        {children}
      </div>

      {open && <ChevronUpCircleIcon/>}
      {closed && <ChevronDownCircleIcon/>}
    </div>
  )
}
