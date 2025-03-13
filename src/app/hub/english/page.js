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

  const limit = 10;
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

    const systemprompt = `Eres un asistente especializado 
  en inglés que tiene como objetivo ayudar
  al usuario a aprender y practicar el idioma.
  Tu rol es apoyar al usuario con explicaciones
  claras y simples. Siempre responde en inglés
  sencillo y fácil de entender.
  Si el usuario comete errores, corrígelos
  suavemente y explica brevemente por qué está mal.
   Además, proporciona ejemplos claros y cortos para m
   ejorar la comprensión. Enfócate en las necesidades
   específicas del usuario, ya sea vocabulario, gramática,
    pronunciación o conversación.`;

    const response = await GetComplementationAPI(value, [], systemprompt);

    setTextResponse(response);
    setIsLoaded(false);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[10em] relative px-2 md:px-4">
      <MainCard
        className="flex flex-col items-center justify-center w-[100%] md:w-[600px] min-h-[40vh] mx-auto pb-10 border border-gray-200 rounded-md bg-white shadow-lg"
        title={"🇺🇸 Learn English"}
        description={`Traduce, aprende frases y nuevas palabras todos los días.`}
      >
        {/* -------- Form  --------*/}
        <HubChat
          input={input}
          setInput={setInput}
          placeholder={"Ayudame con mi ingles"}
          handleSend={handleSend}
          isLoaded={isLoaded}
          color={"text-blue-600"}
        />
        <p className="text-gray-600 text-[12px] font-light mt-2">
          Sugerencias:
        </p>
        <div className="mt-4 flex gap-2 mb-2">
          <div
            className="badge-lg cursor-pointer bg-blue-50 text-blue-600"
            onClick={() => handleSend("Nuevas frasses")}
          >
            {" "}
            Nuevas frasses
          </div>
          <div
            className="badge-lg cursor-pointer bg-blue-50 text-blue-600"
            onClick={() => handleSend("Nuevas palabras")}
          >
            {" "}
            Nuevas palabras
          </div>
          <div
            className="badge-lg cursor-pointer bg-blue-50 text-blue-600"
            onClick={() => handleSend("Conversación básica")}
          >
            Conversación básica
          </div>
        </div>
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
          {textresponse && (
            // <>{textresponse && <MarkDownComponent response={textresponse} />}</>
            <GeneralMarkDown>{textresponse}</GeneralMarkDown>
          )}
        </div>
      </MainCard>
      <ModalSuscription />
    </main>
  );
}
