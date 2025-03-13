import { useState } from "react";
import { Send } from "lucide-react";
import { SupportChatAI } from "@/api/openai";
import Markdown from "markdown-to-jsx";

const SupportChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMessage = {
      role: "user",
      content: [
        {
          type: "input_text",
          text: String(input), // Asegúrate de que input sea una cadena
        },
      ],
    };

    console.log(userMessage, "userMessage");

    setMessages((prevMessages) => [...prevMessages]);

    const chatHistory = [...messages, userMessage];

    const response = await SupportChatAI(String(input), chatHistory); // Asegúrate de que input sea una cadena

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "system", content: response },
    ]);

    console.log(chatHistory, "chathistory");
    console.log(messages, "messages");
  };

  return (
    <div className="w-[600px] h-[70vh] mx-auto flex flex-col bg-gray-100">
      <div className=" p-4 text-center text-lg font-semibold">Support Chat</div>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[75%] ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-gray-800 self-start"}`}
          >
            <MyMarkDown content={msg.content} />
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex items-center bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded-md"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

const MyMarkDown = ({ content }) => {
  const MyParagraph = ({ children, ...props }) => (
    <div {...props}>{children}</div>
  );
  const H1Component = ({ children, ...props }) => (
    <h1 {...props}>{children}</h1>
  );
  const H2Component = ({ children, ...props }) => (
    <h2 {...props}>{children}</h2>
  );
  const H3Component = ({ children, ...props }) => (
    <h3 {...props}>{children}</h3>
  );
  const H4Component = ({ children, ...props }) => (
    <h4 {...props}>{children}</h4>
  );
  const PComponent = ({ children, ...props }) => <p {...props}>{children}</p>;
  const LinkComponent = ({ children, ...props }) => (
    <a target="_blank" {...props}>
      {children}
    </a>
  );

  return (
    <Markdown
      className="text-lg"
      options={{
        overrides: {
          a: {
            component: LinkComponent,
            props: {
              className: "text-red-800",
            },
          },
          h1: {
            component: H1Component,
            props: {
              className: "text-3xl font-semibold border-b text-gray-700 ",
            },
          },
          h2: {
            component: H2Component,
            props: {
              className: "text-2xl font-semibold underline text-gray-700 ",
            },
          },
          h3: {
            component: H3Component,
            props: {
              className:
                "text-xl md:text-2xl font-semibold py-4  md:py-6 underline text-gray-700 ",
            },
          },
          h4: {
            component: H4Component,
            props: {
              className:
                "text-lg md:text-2xl font-semibold py-4  md:py-6 text-gray-700",
            },
          },
          p: {
            component: PComponent,
            props: {
              className:
                "text-md md:text-md font-normal px-2 py-2 text-gray-700",
            },
          },
          strong: {
            component: "strong",
            props: {
              className: "font-semibold text-gray-70",
            },
          },
          ul: {
            component: MyParagraph,
            props: {
              className:
                "text-[16px] md:text-xl px-2 md:px-6 list-disc list-inside",
            },
          },
          li: {
            component: MyParagraph,
            props: {
              className:
                "text-[16px] md:text-xl px-2 md:px-6 list-disc list-inside",
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default SupportChat;
