"use client";
import React, { useState } from "react";
import getEnglishChat from "./api/english";
import Markdown from "markdown-to-jsx";

export default function Page() {
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [textresponse, setTextResponse] = useState("");

  const handleSend = async () => {
    setIsLoaded(true);
    const response = await getEnglishChat(input);
    setTextResponse(response);
    setIsLoaded(false);
  };

  return (
    <main
      className="
    flex flex-col min-h-screen bg-background
     w-full md:mx-auto pt-[10em] relative px-2 md:px-4"
    >
      <div
        className="
          flex flex-col items-center justify-center
         w-[100%] md:w-[600px] min-h-[40vh] mx-auto pb-10
         border border-gray-200 rounded-md bg-white"
      >
        <h1 className="text-xl font-bold pt-4">My English</h1>
        <div className="pb-2 pt-10 px-10">
          {textresponse.response && (
            <MarkDownComponent response={textresponse.response} />
          )}
        </div>
        <textarea
          type="text"
          className="border border-gray-300 rounded-md p-2 mb-4 w-[90%]"
          placeholder="Enter text"
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
        <button
          className="bg-blue-500 text-white rounded-md p-2  w-[90%]"
          onClick={() => handleSend()}
        >
          Submit
        </button>
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
