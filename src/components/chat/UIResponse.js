import { Bookmark, ListRestart } from "lucide-react";
import Markdown from "markdown-to-jsx";

const UIResponse = ({ msg, index }) => {
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
      {msg.sender === "ai" && (
        <div className="pt-4 pb-10">
          <header className="flex items-center">
            <img
              src="https://i.postimg.cc/sXC2b0kn/Instagram-Post.png"
              alt=""
              className="w-8 h-8 rounded-full inline-block mr-2"
            />
            Platano Matematico Power
          </header>
          <h2 className="text-2xl font-semibold mt-4 border-b mb-6">
            {msg.title}
          </h2>
          <Markdown
            className="text-lg"
            options={{
              overrides: {
                h1: {
                  component: H1Component,
                  props: {
                    className: "text-5xl font-semibold ",
                  },
                },
                h2: {
                  component: H2Component,
                  props: {
                    className: "text-4xl font-semibold ",
                  },
                },
                h3: {
                  component: H3Component,
                  props: {
                    className: "text-2xl font-semibold py-6",
                  },
                },
                h4: {
                  component: H4Component,
                  props: {
                    className: "text-xl md:text-2xl font-semibold py-6",
                  },
                },
                p: {
                  component: PComponent,
                  props: {
                    className: "text-lg font-normal py-2",
                  },
                },
                strong: {
                  component: "strong",
                  props: {
                    className: "font-semibold",
                  },
                },
                ul: {
                  component: MyParagraph,
                  props: {
                    className: "px-6 list-disc list-inside",
                  },
                },
              },
            }}
          >
            {msg.text}
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
            >
              <ListRestart size={20} className="mx-2" /> Resumir esta respuesta
            </button>
          </div>
        </div>
      )}
      {msg.sender === "user" && (
        <div className="bg-[#a9a9a923] text-lg py-4 px-6 rounded text-left ml-auto">
          <p>{msg.text}</p>
        </div>
      )}
    </div>
  );
};

export default UIResponse;
