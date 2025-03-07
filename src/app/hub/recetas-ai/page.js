"use client";
import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import { Clock, Send, Share, ArrowRight, Check } from "lucide-react";
import GetRecipe from "./api";
import MainCard from "@/components/hub/MainCard";
import useRateLimiter from "@/app/hooks/userRateLimiter";

export default function Page() {
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [responseApi, setResponseAPI] = useState("");

  const limit = 5; // Límite de peticiones
  const windowTime = 60 * 60 * 1000; // Ventana de tiempo en milisegundos (1 hora)
  const { requestCount, isLimited, incrementRequestCount } = useRateLimiter(
    limit,
    windowTime
  );

  const handleSend = async (value) => {
    if (isLimited) {
      // alert("Límite de peticiones excedido. Inténtalo más tarde.");
      document.getElementById("modalGetpremium").showModal();
      return;
    }

    incrementRequestCount();

    setResponseAPI("");
    setInput("");
    setIsLoaded(true);
    const response = await GetRecipe(value);

    console.log(response, "response en frontend");
    setResponseAPI(response);
    setIsLoaded(false);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[6em] md:pt-[10em] relative px-2 md:px-4">
      <MainCard title={` 🧑‍🍳 Recetas rápida de comida`}>
        {/* -------- Form  --------*/}
        <div className="relative w-full flex flex-col justify-center items-center mt-6">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 mb-2 w-[90%]"
            placeholder="Desayuno sencillo"
            value={input}
            min={2}
            max={10}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                !isLoaded && handleSend(e.target.value);
              }
            }}
          />
          {!isLoaded && (
            <button
              className=" text-white rounded-md p-2 absolute top-0 bottom-0 right-10"
              onClick={() => handleSend(input)}
            >
              <Send size={20} className="text-red-600 ml-4" />
            </button>
          )}
        </div>
        <p className="text-gray-600 text-[12px] font-light mt-2">
          Sugerencias:
        </p>
        <div className="mt-4 flex gap-2 mb-2">
          <div
            className="badge-lg cursor-pointer bg-red-50 text-red-600"
            onClick={() => handleSend("Desayuno")}
          >
            {" "}
            Desayuno
          </div>
          <div
            className="badge-lg cursor-pointer bg-red-50 text-red-600"
            onClick={() => handleSend("Almuerzo")}
          >
            {" "}
            Almuerzo
          </div>
          <div
            className="badge-lg cursor-pointer bg-red-50 text-red-600"
            onClick={() => handleSend("Cena")}
          >
            Cena
          </div>
        </div>
        {/* -------- Form End --------*/}

        {isLoaded && (
          <div className="text-center pb-10">
            <div>
              {" "}
              <span className="loading loading-ring w-[40px] text-blue-600"></span>
              <p className="text-blue-400">Generando Receta...</p>
            </div>
          </div>
        )}

        {/* -------- response UI  --------*/}

        <div className="pb-2 px-2 md:px-10 pt-10 text-center">
          {responseApi && (
            <div className="bg-red-50 py-6 px-4 text-red-600">
              <h4 className="text-xl font-semibold text-red-600">
                {responseApi.title}
              </h4>
              <p className="text-lg font-light text-gray-600">
                {responseApi.description}
              </p>
            </div>
          )}
          {/* steps */}
          {responseApi && (
            <h4 className="text-xl font-semibold my-4 text-gray-700">Steps:</h4>
          )}
          <div className="flex flex-col">
            {responseApi &&
              responseApi.steps.map((dt, index) => (
                <div className="mb-10 w-full text-center" key={index}>
                  <div className="py-2 px-2 bg-red-100 text-red-600 w-[40px] mx-auto rounded-full">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 mt-2 text-lg">{dt.instruction}</p>
                  <div className="badge bg-red-600 text-white mt-2 py-4 px-3 rounded-full text-md">
                    <Clock size={16} className="mr-2" /> {dt.estimated_time}
                  </div>
                </div>
              ))}

            {responseApi && (
              <div className="flex justify-center">
                <button
                  className="border text-gray-700 py-2 px-4 rounded-md mt-4 flex"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }}
                >
                  <Share className="pr-2" />
                  Compartir
                </button>
              </div>
            )}
          </div>
        </div>
        {/* -------- response UI END --------*/}
      </MainCard>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("modalGetpremium").showModal()}
      >
        open modal
      </button> */}
      <dialog id="modalGetpremium" className="modal">
        <div className="modal-box">
          <div className="text-center mt-4">
            <img
              src="https://i.postimg.cc/9ftHvYPK/logo-holagenio.png"
              className="w-[150px] mx-auto"
            />
            <h3 className="font-bold text-xl text-center text-gray-800">
              Sigue usando HolaGenio de forma ilimitada
            </h3>
            <p className="py-4 text-md font-light">
              Si quieres seguir utilizando HolaGenio, puedes elegir nuestro plan
              economico ilimitado
            </p>

            <div
              className="bg-white w-full min-h-[20vh] my-2 rounded-md py-4 px-4 text-left shadow-lg border
               border-gray-200 "
            >
              <h3 className="font-semibold text-2xl text-gray-800">
                Plan Estandar
              </h3>
              <ul className="text-gray-600 pt-4">
                <li className="mb-2 text-md font-light flex gap-2">
                  <Check />
                  Todas las herramientas disponibles
                </li>
                <li className="mb-2 text-md font-light flex gap-2">
                  <Check />
                  Acceso temprano a nuevas herramientas
                </li>
                <li className="mb-2 text-md font-light flex gap-2">
                  <Check />
                  Guarda tus respuestas de cada chat.
                </li>
              </ul>
              <div className="text-center pb-4">
                <h3 className="text-4xl font-bold text-gray-800 ">$8</h3>
                <p className="text-gray-400">Por usuario / Mensual</p>
              </div>
              <div className="text-center">
                <a
                  href="https://buy.stripe.com/9AQcOP4AjcmO9iM7sK"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600
                 w-full d-block"
                >
                  Suscribirse
                </a>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
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
                "text-xl md:text-2xl font-semibold py-4  md:py-6 underline text-gray-700",
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
