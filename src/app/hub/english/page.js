"use client";
import React, { useState } from "react";
import getEnglishChat from "./api/index";
import Markdown from "markdown-to-jsx";
import MainCard from "@/components/hub/MainCard";
import { Send } from "lucide-react";

export default function Page() {
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [textresponse, setTextResponse] = useState("");

  const handleSend = async (value) => {
    setIsLoaded(true);
    const response = await getEnglishChat(value);
    setTextResponse(response);

    console.log(response.properties, "response hiii");
    setIsLoaded(false);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[10em] relative px-2 md:px-4">
      <MainCard
        className="flex flex-col items-center justify-center w-[100%] md:w-[600px] min-h-[40vh] mx-auto pb-10 border border-gray-200 rounded-md bg-white"
        title={"🇺🇸 Learn English"}
        description={`Traduce, aprende frases y nuevas palabras todos los días.`}
      >
        {/* -------- Form  --------*/}
        <div className="relative w-full flex flex-col justify-center items-center mt-6">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 mb-2 w-[90%]"
            placeholder="Ayudame con mi ingles"
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
              <Send size={20} className="text-blue-600 ml-4" />
            </button>
          )}
        </div>

        {/* -------- Form End --------*/}

        <div className="pb-2 pt-10 w-full px-8">
          {textresponse && (
            <>
              <h2 className="text-xl">{textresponse.title}</h2>
              {textresponse.response && (
                <MarkDownComponent response={textresponse.response} />
              )}
            </>
          )}
        </div>
      </MainCard>
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
