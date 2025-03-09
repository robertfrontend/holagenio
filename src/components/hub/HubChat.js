import { Send } from "lucide-react";
import React from "react";

export default function HubChat({
  input,
  setInput,
  handleSend,
  color,
  placeholder,
  isLoaded,
}) {
  return (
    <div className="relative w-full flex flex-col justify-center items-center mt-6">
      <textarea
        type="text"
        className="border border-gray-300 rounded-md p-2 mb-2 w-[90%] 
            focus:outline-none  pr-20"
        placeholder={placeholder || "Placeholder"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            !isLoaded && handleSend(e.target.value);
          }
        }}
      />
      {!isLoaded && (
        <button
          className="rounded-md p-2 absolute top-0 bottom-0 right-10"
          onClick={() => {
            handleSend(input);
          }}
        >
          <Send size={20} className={`${color || "text-blue-600"} ml-4`} />
        </button>
      )}
    </div>
  );
}
