"use client";
import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import { Clock, Send, Share } from "lucide-react";
import GetRecipe from "./api";

export default function Page() {
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [textresponse, setTextResponse] = useState("");

  const handleSend = async () => {
    setInput("");
    setIsLoaded(true);
    const response = await GetRecipe(input);

    console.log(response, "response en frontend");
    setTextResponse(response);
    setIsLoaded(false);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[10em] relative px-2 md:px-4">
      <div
        className=" flex flex-col items-center justify-center w-[100%] md:w-[600px]
       min-h-[40vh] mx-auto pb-10 border border-gray-200 rounded-md
       bg-white shadow-lg px-2 md:p-6"
      >
        <header className="px-4 pt-4 md:px-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold pt-4 text-gray-700">
            Recetas rápida de comida
          </h1>
          <p className="mt-2 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim,
            quam totam quibusdam sapiente hic placeat!
          </p>
        </header>

        {/* -------- Form  --------*/}
        <div className="relative w-full flex flex-col justify-center items-center mt-6">
          <textarea
            type="text"
            className="border border-gray-300 rounded-md p-2 mb-2 w-[90%]"
            placeholder="Desayuno sencillo"
            value={input}
            min={2}
            max={10}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                !isLoaded && handleSend();
              }
            }}
          />
          {!isLoaded && (
            <button
              className=" text-white rounded-md p-2 absolute top-0 bottom-0 right-10"
              onClick={() => handleSend()}
            >
              <Send size={20} className="text-blue-600 ml-2" />
            </button>
          )}
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
          {textresponse && (
            <div className="bg-blue-50 py-6 px-4 text-blue-600">
              <h4 className="text-xl font-semibold text-blue-700">
                {textresponse.title}
              </h4>
              <p className="text-lg font-light text-gray-600">
                {textresponse.description}
              </p>
            </div>
          )}
          {/* steps */}
          {textresponse && (
            <h4 className="text-xl font-semibold my-4 text-gray-700">Steps:</h4>
          )}
          <div className="flex flex-col">
            {textresponse &&
              textresponse.steps.map((dt, index) => (
                <div className="mb-10 w-full text-center" key={index}>
                  <div className="py-2 px-2 bg-blue-100 text-blue-600 w-[40px] mx-auto rounded-full">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 mt-2 text-lg">{dt.instruction}</p>
                  <div className="badge bg-blue-600 text-white mt-2 py-4 px-3 rounded-full text-md">
                    <Clock size={16} className="mr-2" /> {dt.estimated_time}
                  </div>
                </div>
              ))}

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
          </div>
        </div>
        {/* -------- response UI END --------*/}
      </div>
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
