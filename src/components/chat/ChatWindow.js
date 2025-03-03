import getChatAI from "@/api/openai";
import { Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, getUserData } from "@/firebase/firebaseConfig";

import UIResponse from "./UIResponse";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [numberSection, setNumberSection] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserData();
      console.log(response, "response");
    };

    fetchData();
  }, []);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(meta);
  }, []);

  const handleSend = async () => {
    setNumberSection((prev) => prev + 1);
    setFirstTime(false);
    setIsLoaded(true);
    setInput("");
    const response = await getChatAI(input);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
      { sender: "ai", text: response.response, title: response.title },
    ]);

    const section = document.querySelector(
      `[section-id="${response.sectionId}"]`
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setIsLoaded(false);
  };

  const handleSugestions = async (message) => {
    setNumberSection((prev) => prev + 1);
    setInput(message);
    setFirstTime(false);
    setIsLoaded(true);
    const response = await getChatAI(message);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
      { sender: "ai", text: response.response, title: response.title },
    ]);
    setInput("");
    setIsLoaded(false);
  };

  return (
    <div
      className="bg-white flex flex-col h-screen ml-auto border
     border-gray-300 md:rounded-lg overflow-hidden pb-20 md:pb-10 md:px-10
     "
    >
      <header className="p-4 text-center border-b">
        <h1 className="text-xl font-bold ">Platano Power AI</h1>
      </header>
      {firstTime && <Suggestions handleSugestions={handleSugestions} />}
      <div className="flex-1 p-2 md:p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <UIResponse msg={msg} index={index} />
        ))}
        {isLoaded && (
          <div className="text-center">
            <p className="text-gray-400">AI is typing...</p>
          </div>
        )}
      </div>
      <div className="flex  border rounded-xl shadow-md border-gray-300 mx-2 md:mx-2 pl-2">
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
          className="flex-1 p-2  rounded mr-2 w-full pl-4 pt-2 pb-12 focus:outline-none 
          font-light 
          "
        />
        <button
          onClick={() => !isLoaded && handleSend()}
          className="p-2 text-white rounded pr-4 bg-blue-100"
        >
          <Send size={20} className="text-blue-600" />
        </button>
      </div>
    </div>
  );
};

const Suggestions = ({ handleSugestions }) => {
  return (
    <section className="text-center py-10">
      <div>
        <h1 className="text-3xl">Good Morning Robert!</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 justify-around my-4 text-md">
        <div
          className="border border-gray-200 p-4 rounded-lg cursor-pointer"
          onClick={() => handleSugestions("¿Cuál es la capital de Francia?")}
        >
          <p className="text-center">¿Cuál es la capital de Francia?</p>
        </div>
        <div
          className="border border-gray-200 p-4 rounded-lg cursor-pointer"
          onClick={() => handleSugestions("Quien fue Juan Pablo Duarte?")}
        >
          <p className="text-center">¿Quien fue Juan Pablo Duarte?</p>
        </div>
        <div
          className="border border-gray-200 p-4 rounded-lg cursor-pointer"
          onClick={() => handleSugestions("¿Qué es el aprendizaje automático?")}
        >
          <p className="text-center">¿Qué es el aprendizaje automático?</p>
        </div>
      </div>
    </section>
  );
};

export default ChatWindow;
