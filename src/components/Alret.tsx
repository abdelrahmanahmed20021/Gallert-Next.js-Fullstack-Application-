import React from "react";

import { cn } from "@/utils/cn";

export default function Alret({
  message,
  slug,
  status,
}: {
  message: string;
  slug: string;
  status: "done" | "pending";
}) {
  return (
    <div
      className={cn(
        "fixed top-10 font-bold left-[-100%] gap-3 bg-slate-900  flex justify-center items-center p-5 rounded-md",
        status == "done" && "left-10"
      )}
    >
      <span className="text-white">
        {message}
        <span className="text-green-400"> {slug}</span>
      </span>
    </div>
  );
}
