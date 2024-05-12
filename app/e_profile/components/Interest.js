"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Interest = ({ text, emoji, isInUser }) => {
  const [selected, setSelected] = useState(isInUser);

  return (
    <div className="flex flex-row space-x-2 items-center justify-center mb-3">
      <button
        className={cn(
          "rounded-full w-1 h-6 bg-coral/30 md:p-5 p-3 mx-auto md:mx-0 flex hover:bg-light-pink justify-center items-center opacity-80",
          {
            "bg-light-pink": selected,
          }
        )}
        onClick={() => {
          setSelected((prev) => !prev);
        }}
      >
        {emoji}
      </button>

      <p className="text-light-pink/70 italic font-semibold">{text}</p>
    </div>
  );
};

export default Interest;
