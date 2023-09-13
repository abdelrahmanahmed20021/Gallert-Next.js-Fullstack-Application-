import React from "react";

export default function Alret({
  message,
  slug,
}: {
  message: string;
  slug: string;
}) {
  return (
    <div className="fixed top-10 font-bold right-10 gap-3 bg-slate-900  flex justify-center items-center p-5 rounded-md">
      <span className="text-white">
        {message}
        <span className="text-green-400"> {slug}</span>
      </span>
    </div>
  );
}
