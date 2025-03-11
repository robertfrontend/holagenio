import getChatAI from "@/api/openai";
import { Send } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

import useRateLimiter from "@/app/hooks/userRateLimiter";
import ModalSuscription from "@/components/hub/ModalSuscription";

import UIResponse from "./UIResponse";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [numberSection, setNumberSection] = useState(0);

  const [helper, setSelectHelper] = useState("");

  const loaderRef = useRef(null);

  const limit = 10; // Límite de peticiones
  const windowTime = 60 * 60 * 1000; // Ventana de tiempo en milisegundos (1 hora)
  const { requestCount, isLimited, incrementRequestCount } = useRateLimiter(
    limit,
    windowTime
  );


  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(meta);
  }, []);

  const handleChatAI = async (handletext, isResume) => {
    if (isLimited) {
      // alert("Límite de peticiones excedido. Inténtalo más tarde.");
      document.getElementById("modalGetpremium").showModal();
      return;
    }

    setNumberSection((prev) => prev + 1);
    setFirstTime(false);
    setIsLoaded(true);
    setInput("");

    const prompt = helper ? `${helper}: ${handletext}` : handletext;

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: isResume ? "Resumiendo respuesta..." : handletext,
      }
    ])

    const chatHistory = [...messages]
    const response = await getChatAI(prompt, chatHistory);

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "system", content: response },
    ]);


    // Scroll to the loader div
    if (loaderRef.current) {
      loaderRef.current.scrollIntoView({ behavior: "smooth" });
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
     border-gray-300 md:rounded-lg overflow-hidden pb-[2em] md:pb-10 md:px-10
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
            <div className="min-h-[30vh]" id="loader" ref={loaderRef}>
              {" "}
              <span
                className="loading loading-ring
               w-[60px] text-blue-600"
              ></span>
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
      <ModalSuscription />
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
        fixed bottom-2  left-0 right-0 z-10 md:static bg-white
      "
    >
      <div className=" bg-white mt-2 flex flex-row items-center rounded">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              !isLoaded && handleSend();
            }
          }}
          placeholder="Pregunta lo que sea..."
          className="flex-1 p-2  rounded mr-2 w-full pl-2 pt-2 pb-12 focus:outline-none
          font-light 
          "
        />
        <button
          onClick={() => !isLoaded && handleSend()}
          className="p-2 text-blue-600 rounded pr-4 flex items-center"
        >
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
        <h1 className="text-3xl">¿En qué puedo ayudarle?</h1>
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
          onClick={() => handleSugestions("Escribe un cuento por mi")}
        >
          <p className="text-center">Escribe un cuento por mi</p>
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
