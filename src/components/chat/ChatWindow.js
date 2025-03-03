import getChatAI from "@/api/openai";
import { Send } from "lucide-react";
import React, { useState } from "react";

import Markdown from "markdown-to-jsx";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);

  const handleSend = async () => {
    setIsLoaded(true);
    setInput("");
    const response = await getChatAI(input);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
      { sender: "ai", text: response.response, title: response.title },
    ]);

    console.log(response.title, "response CHATT");

    setIsLoaded(false);
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
        px-10
     "
    >
      <header className="p-4 text-center border">
        <h1 className="text-xl font-bold ">Matematicas AI</h1>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <UIResponse msg={msg} index={index} />
        ))}
        {isLoaded && (
          <div className="text-center">
            <p className="text-gray-400">AI is typing...</p>
          </div>
        )}
      </div>
      <div className="flex border-t border-gray-100 bg-gray-100">
        <input
          type="text"
          value={input}
          min={2}
          max={10}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              !isLoaded && handleSend();
            }
          }}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 border border-gray-100 rounded mr-2 w-full pl-4 pt-2 pb-12 text-xl focus:outline-none bg-gray-100"
        />
        <button
          onClick={() => !isLoaded && handleSend()}
          className="p-2  text-white rounded pr-10"
        >
          <Send size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

const UIResponse = ({ msg, index }) => {
  console.log(msg, "msg");
  const MyParagraph = ({ children, ...props }) => (
    <div {...props}>{children}</div>
  );
  return (
    <div key={index} className={`mb-2 p-2  flex flex-col`}>
      {msg.sender === "ai" && (
        <div className="pt-4 pb-10">
          <header className="flex items-center">
            <img
              src="https://i.postimg.cc/sXC2b0kn/Instagram-Post.png"
              alt=""
              className="w-8 h-8 rounded-full inline-block mr-2"
            />
            Platano Matematico Power
          </header>
          <h2 className="text-2xl font-semibold mt-4 border-b mb-6">
            {msg.title}
          </h2>
          <Markdown
            className="text-lg"
            options={{
              overrides: {
                h1: {
                  component: MyParagraph,
                  props: {
                    className: "text-5xl font-semibold",
                  },
                },
                h2: {
                  component: MyParagraph,
                  props: {
                    className: "text-4xl font-semibold",
                  },
                },
                h3: {
                  component: MyParagraph,
                  props: {
                    className: "text-3xl font-semibold",
                  },
                },
                h4: {
                  component: MyParagraph,
                  props: {
                    className: "text-2xl font-semibold",
                  },
                },
                p: {
                  component: MyParagraph,
                  props: {
                    className: "text-lg font-semibold",
                  },
                },
              },
            }}
          >
            {msg.text}
          </Markdown>
        </div>
      )}
      {msg.sender === "user" && (
        <div className="bg-[#a9a9a923] text-lg py-4 px-6 rounded text-left ml-auto">
          <p>{msg.text}</p>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
