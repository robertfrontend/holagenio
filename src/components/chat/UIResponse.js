import { Bookmark, ListRestart } from "lucide-react";
import Markdown from "markdown-to-jsx";

const UIResponse = ({ msg, index, handleResumeResponse }) => {
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
    <div
      key={index}
      className={`mb-2 p-2  flex flex-col`}
      id={`response-${index}`}
    >
      {msg.role === "system" && (
        <div className="pt-4 pb-10">
          <header className="flex items-center font-bold">
            <img
              src="https://i.postimg.cc/sXC2b0kn/Instagram-Post.png"
              alt=""
              className="w-8 h-8 rounded-full inline-block mr-2"
            />
            Genio AI
          </header>

          <Markdown
            className="text-lg"
            options={{
              overrides: {
                h1: {
                  component: H1Component,
                  props: {
                    className: "text-3xl font-semibold border-b text-gray-700 ",
                  },
                },
                h2: {
                  component: H2Component,
                  props: {
                    className:
                      "text-2xl font-semibold underline text-gray-700 ",
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
            {msg.content}
          </Markdown>
          <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <button
              className="
             text-gray-500 px-4 py-2 rounded flex justify-start items-start"
            >
              <Bookmark size={20} className="mx-2" /> Guardar en mis notas
            </button>
            <button
              className="
             text-gray-500 px-4 py-2 rounded flex justify-center items-center"
              onClick={() => handleResumeResponse(msg)}
            >
              <ListRestart size={20} className="mx-2" /> Resumir esta respuesta
            </button>
          </div>
        </div>
      )}
      {msg.role === "user" && (
        <div className="border border-gray-200 bg-gray-50 text-md md:text-lg py-2 md:py-3 px-6 rounded text-left ml-auto">
          <p>{msg.content}</p>
        </div>
      )}
    </div>
  );
};

export default UIResponse;
