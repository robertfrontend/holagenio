"use client";
import { AdvanceSearch } from "@/api/openai";
import Markdown from "markdown-to-jsx";
import React, { useState } from "react";
import SupportChat from "./SupportChat";

export default function Page() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSearch = async () => {
    console.log(query, "query");
    const response = await AdvanceSearch(query);
    console.log(response);
    setResponse(response);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pb-[8em] pt-[6em] md:pt-[10em] relative px-2 md:px-4">
      <section className="my-[5em] bg-gray-200 rounded-md px-10 py-10">
        <SupportChat />
      </section>
      <section className="my-[5em] bg-gray-200 rounded-md px-10 py-10">
        <h1 className="text-2xl">Buscador avanzado</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-4 p-2 border border-gray-300 rounded"
          placeholder="Enter your query"
        />
        <button
          onClick={handleSearch}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
        {response && (
          <div className="mt-4 p-2 bg-white border border-gray-300 rounded">
            <MyMarkDown content={response} />
          </div>
        )}
      </section>
    </main>
  );
}

const MyMarkDown = ({ content }) => {
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
  const LinkComponent = ({ children, ...props }) => (
    <a target="_blank" {...props}>
      {children}
    </a>
  );

  return (
    <Markdown
      className="text-lg"
      options={{
        overrides: {
          a: {
            component: LinkComponent,
            props: {
              className: "text-red-800",
            },
          },
          h1: {
            component: H1Component,
            props: {
              className: "text-3xl font-semibold border-b text-gray-700 ",
            },
          },
          h2: {
            component: H2Component,
            props: {
              className: "text-2xl font-semibold underline text-gray-700 ",
            },
          },
          h3: {
            component: H3Component,
            props: {
              className:
                "text-xl md:text-2xl font-semibold py-4  md:py-6 underline text-gray-700 ",
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
              className:
                "text-md md:text-md font-normal px-2 py-2 text-gray-700",
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
          li: {
            component: MyParagraph,
            props: {
              className:
                "text-[16px] md:text-xl px-2 md:px-6 list-disc list-inside",
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};
