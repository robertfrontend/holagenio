"use client";
import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import MainCard from "@/components/hub/MainCard";
import useRateLimiter from "@/app/hooks/userRateLimiter";
import ModalSuscription from "@/components/hub/ModalSuscription";
import HubChat from "@/components/hub/HubChat";
import { GetComplementationAPI } from "@/api/openai";
import GeneralMarkDown from "@/components/GeneralMarkDown";

export default function Page() {
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [textresponse, setTextResponse] = useState("");

  const limit = 100;
  const windowTime = 60 * 60 * 1000; // Ventana de tiempo en milisegundos (1 hora)
  const { requestCount, isLimited, incrementRequestCount } = useRateLimiter(
    limit,
    windowTime
  );

  const handleSend = async (value) => {
    setTextResponse("");
    if (isLimited) {
      document.getElementById("modalGetpremium").showModal();
      return;
    }
    incrementRequestCount();

    setIsLoaded(true);

    const systemprompt = `Eres un asistente AI amigable y empático que ofrece 
  consejos personales y emocionales. Tu objetivo principal es escuchar
  activamente al usuario, entender sus inquietudes y
  proporcionar recomendaciones útiles y reconfortantes. Siempre responde de manera amable, positiva y alentadora, utilizando un lenguaje cálido y comprensivo. Evita dar diagnósticos médicos o psicológicos específicos; enfócate en sugerencias prácticas, apoyo emocional y motivación. Anima al usuario a sentirse escuchado, apoyado y valorado durante cada interacción.`;

    const response = await GetComplementationAPI(value, [], systemprompt);

    setTextResponse(response);
    setIsLoaded(false);
  };

  return (
    <main
      className="flex flex-col min-h-screen bg-background 
    w-full md:mx-auto pt-[10em] relative px-2 md:px-4"
    >
      <MainCard
        className="flex flex-col items-center justify-center w-[100%] md:w-[800px] min-h-[40vh] mx-auto pb-10 border border-gray-200 rounded-md bg-white shadow-lg"
        title={"☮️ Consejos personales y emocionales"}
        description={`Chat de consejos personales y emocionales`}
      >
        {/* -------- Form  --------*/}
        <HubChat
          input={input}
          setInput={setInput}
          placeholder={"En que necesitas ayuda?"}
          handleSend={handleSend}
          isLoaded={isLoaded}
          color={"text-violet-600"}
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

        <div
          className="pb-2 pt-2 w-full px-4 md:px-8 border-2 border-gray-50 rounded-md
          shadow-md bg-gray-50
        "
        >
          {textresponse && <GeneralMarkDown>{textresponse}</GeneralMarkDown>}
        </div>
      </MainCard>
      <ModalSuscription />
    </main>
  );
}
