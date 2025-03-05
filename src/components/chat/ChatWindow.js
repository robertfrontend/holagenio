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

  const [helper, setSelectHelper] = useState("");

  useEffect(() => {}, []);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(meta);
  }, []);

  const handleChatAI = async (handletext, isResume) => {
    setNumberSection((prev) => prev + 1);
    setFirstTime(false);
    setIsLoaded(true);
    setInput("");

    const prompt = helper ? `${helper}: ${handletext}` : handletext;

    const response = await getChatAI(prompt);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "user",
        text: isResume ? "Resumiendo respuesta..." : handletext,
      },
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

  const handleSend = async () => {
    handleChatAI(input, false);
  };

  const handleSugestions = async (message) => {
    handleChatAI(message, false);
  };

  const handleResumeResponse = async (message) => {
    console.log(message, "message to resume");
    handleChatAI(
      `Quiero que me hagas un resumen de este text largo: ${message.text}`,
      true
    );
  };

  const handleHelperSelect = (value) => {
    setSelectHelper(value);
  };

  return (
    <div
      className="bg-white flex flex-col h-screen ml-auto border
     border-gray-300 md:rounded-lg overflow-hidden pb-[10em] md:pb-10 md:px-10
     "
    >
      <header className="p-4 text-center border-b">
        <h1 className="text-xl font-bold ">Mi AI</h1>
      </header>
      {firstTime && <Suggestions handleSugestions={handleSugestions} />}
      <div className="flex-1 p-2 pb-4 md:p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <UIResponse
            msg={msg}
            index={index}
            handleResumeResponse={handleResumeResponse}
          />
        ))}
        <div className="text-center pb-10">
          {isLoaded && (
            <div>
              {" "}
              <span className="loading loading-ring w-[60px] text-blue-600"></span>
              <p className="text-blue-400">AI is typing...</p>
            </div>
          )}
        </div>
      </div>
      <FloatedChat
        handleHelperSelect={handleHelperSelect}
        setInput={setInput}
        handleSend={handleSend}
        input={input}
        isLoaded={isLoaded}
      />
    </div>
  );
};

const FloatedChat = ({
  handleHelperSelect,
  setInput,
  handleSend,
  input,
  isLoaded,
}) => {
  return (
    <div
      className="flex flex-col border rounded-xl shadow-md 
       mx-2 md:mx-2 px-2 pb-2
        fixed bottom-6 left-0 right-0 z-10 md:static bg-white
      "
    >
      <select
        onChange={(e) => handleHelperSelect(e.target.value)}
        className="p-2 mr-2 w-full pl-4 pt-2 focus:outline-none font-light
            bg-white border border-blue-100 my-2 rounded px-2
          "
      >
        <option value="">Selecciona una opción</option>
        <option value="Ayudame con mi Ingles">Ayúdame con mi Inglés</option>
        <option value="Ayudame con mi Matemáticas">
          Ayúdame con mi Matemáticas
        </option>
        <option value="Ayudame con mi Ciencias">Ayúdame con mi Ciencias</option>
        <option value="Ayudame con mi Historia">Ayúdame con mi Historia</option>
      </select>

      <div className="border bg-white mt-2 flex flex-row items-center rounded">
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
          className="p-2 text-blue-600 rounded pr-4 flex items-center"
        >
          Send
          <Send size={20} className="text-blue-600 ml-2" />
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
