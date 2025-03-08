"use client";
import React, { useState } from "react";
import GetConsejosAPI from "./api/index";
import Markdown from "markdown-to-jsx";
import MainCard from "@/components/hub/MainCard";
import useRateLimiter from "@/app/hooks/userRateLimiter";
import ModalSuscription from "@/components/hub/ModalSuscription";
import HubChat from "@/components/hub/HubChat";

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
    const response = await GetConsejosAPI(value);
    setTextResponse(response);
    setIsLoaded(false);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[10em] relative px-2 md:px-4">
      <MainCard
        className="flex flex-col items-center justify-center w-[100%] md:w-[600px] min-h-[40vh] mx-auto pb-10 border border-gray-200 rounded-md bg-white shadow-lg"
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

        <p className="text-gray-600 text-[12px] font-light mt-2">
          Sugerencias:
        </p>
        <div className="mt-4 flex gap-2 mb-2">
          <div
            className="badge-lg cursor-pointer bg-violet-50 text-violet-600"
            onClick={() => handleSend("Consejo de vida")}
          >
            {" "}
            Consejo de vida
          </div>
          <div
            className="badge-lg cursor-pointer bg-violet-50 text-violet-600"
            onClick={() => handleSend("Consejo de salud")}
          >
            {" "}
            Consejo de salud
          </div>
          <div
            className="badge-lg cursor-pointer bg-violet-50 text-violet-600"
            onClick={() => handleSend("Consejo financiero")}
          >
            Consejo financiero
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

        <div className="pb-2 pt-2 w-full px-8">
          {textresponse && (
            <>{textresponse && <MarkDownComponent response={textresponse} />}</>
          )}
        </div>
      </MainCard>
      <ModalSuscription />
    </main>
  );
}

const MarkDownComponent = ({ response }) => {
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
  return (
    <Markdown
      className="text-lg"
      options={{
        overrides: {
          h1: {
            component: H1Component,
            props: {
              className: "text-3xl font-semibold border-b text-gray-700",
            },
          },
          h2: {
            component: H2Component,
            props: {
              className: "text-2xl font-semibold underline text-gray-700",
            },
          },
          h3: {
            component: H3Component,
            props: {
              className:
                "text-xl md:text-2xl font-semibold py-2  md:py-2 underline text-gray-700",
            },
          },
          h4: {
            component: H4Component,
            props: {
              className:
                "text-lg md:text-2xl font-semibold py-2  md:py-2 text-gray-700",
            },
          },
          p: {
            component: PComponent,
            props: {
              className: "text-md font-normal py-2 text-gray-700",
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
        },
      }}
    >
      {response}
    </Markdown>
  );
};
