import getChatAI from "@/api/openai";
import { Send } from "lucide-react";
import React, { useState } from "react";

import Markdown from "markdown-to-jsx";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const response = await getChatAI(input);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
      { sender: "ai", text: response.response, title: response.title },
    ]);

    console.log(response.title, "response CHATT");

    setInput("");
  };

  const getAIResponse = async (message) => {
    try {
      const response = await getChatAI(message);
    } catch (error) {
      console.log(error);
    }
    // return `AI response to "${message}"`;
  };

  return (
    <div
      className="bg-white flex flex-col h-screen ml-auto border
     border-gray-300 md:rounded-lg overflow-hidden
        pb-10
     "
    >
      <header className="p-4 text-center border">
        <h1 className="text-xl font-bold ">Matematicas AI</h1>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${msg.sender === "user" ? "bg-green-200 self-end" : "bg-gray-200 self-start"}`}
          >
            {msg.sender === "ai" && (
              <h2 className="text-xl font-semibold">{msg.title}</h2>
            )}
            <p>response: {msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex p-4 border-t border-gray-300">
        <input
          type="text"
          value={input}
          min={2}
          max={10}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 border border-gray-300 rounded mr-2 w-full py-5 text-lg focus:outline-none"
        />
        <button
          onClick={() => handleSend()}
          className="p-2  text-white rounded"
        >
          <Send size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
