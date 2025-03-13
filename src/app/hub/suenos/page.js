"use client";
import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import MainCard from "@/components/hub/MainCard";
import { Send } from "lucide-react";
import useRateLimiter from "@/app/hooks/userRateLimiter";
import ModalSuscription from "@/components/hub/ModalSuscription";
import HubChat from "@/components/hub/HubChat";
import { GetComplementationAPI } from "@/api/openai";
import GeneralMarkDown from "@/components/GeneralMarkDown";

export default function Page() {
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [textresponse, setTextResponse] = useState("");
  const [messages, setMessages] = useState([]);

  const limit = 10;
  const windowTime = 60 * 60 * 1000;
  const { requestCount, isLimited, incrementRequestCount } = useRateLimiter(
    limit,
    windowTime
  );

  const handleSend = async (value) => {
    setInput("");
    setTextResponse("");
    if (isLimited) {
      document.getElementById("modalGetpremium").showModal();
      return;
    }
    incrementRequestCount();

    setIsLoaded(true);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: input,
      },
    ]);

    const chatHistory = [...messages];

    console.log(chatHistory, "chatHistory");

    const systemprompt = `Eres un asistente especializado en interpretar los significados
   de los sueños. Cuando el usuario te comparta un sueño que tuvo, tu tarea será analizarlo
    cuidadosamente, considerando símbolos, emociones y situaciones presentes en el sueño,
     y ofrecer un resumen muy breve del posible significado. Sé claro y conciso en tu
      respuesta inicial. Si el usuario desea más detalles o una explicación más profunda,
       él lo pedirá explícitamente. Mantén un lenguaje amigable y abierto, recordando
       siempre que la interpretación de los sueños es subjetiva y simbólica.

  Hacer la respuesta lo mas resumida posible. Si el usuario la pide con mas detalles pues
  le damos una respuesta mas extensa.
  `;

    const response = await GetComplementationAPI(
      value,
      chatHistory,
      systemprompt
    );
    setTextResponse(response);
    setIsLoaded(false);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[10em] relative px-2 md:px-4">
      <MainCard
        className="flex flex-col items-center justify-center w-[100%] md:w-[600px] min-h-[40vh] mx-auto pb-10 border border-gray-200 rounded-md bg-white shadow-lg"
        title={"🛌 Significado de los sueños"}
        description={`Escribe tu sueño y averiguaremos el significado`}
      >
        {/* -------- Form  --------*/}
        <HubChat
          input={input}
          setInput={setInput}
          placeholder={"Place hodler hola"}
          handleSend={handleSend}
          isLoaded={isLoaded}
          color={"text-gray-600"}
        />
        {/* -------- Form End --------*/}

        {isLoaded && (
          <div className="text-center pb-10">
            <div>
              <span className="loading loading-ring w-[40px] text-blue-600"></span>
              <p className="text-blue-400">Generando Respuesta...</p>
            </div>
          </div>
        )}

        <div className="pb-2 pt-4 w-full px-8">
          {textresponse && <GeneralMarkDown>{textresponse}</GeneralMarkDown>}
        </div>
      </MainCard>
      <ModalSuscription />
    </main>
  );
}
