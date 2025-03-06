"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ChevronRight, ChefHat } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pb-[8em] pt-[3em] md:pt-[10em] relative px-2 md:px-4">
      <section className="relative w-full pt-10 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center px-2 md:px-4 max-w-2xl">
          <div className="text-center flex justify-center items-center">
            <img src="./logo-holagenio.png" className="w-[300px]" />
          </div>
          <h1 className="text-3xl md:text-5xl mt-0 font-bold mb-4 text-gray-700">
            AI Sin Complicaciones Úsala en tu Día a Día
          </h1>
          <p className="text-md md:text-xl text-gray-700 font-light ">
            Herramientas de Inteligencia Artificial simples, rápidas y
            asequibles para el día a día.
          </p>
          <div className="w-full">
            <SubjectCards />
          </div>
          <p className="text-[14px] text-blue-500">
            Utilizamos lo ultimo de AI para nuestro modelos
          </p>
          {/* <div className="text-center flex justify-center items-center">
            <Link href={"/central"}>
              <button className="px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-md flex items-center justify-center space-x-2">
                Únete a la lista de espera <ArrowRight size={20} />
              </button>
            </Link>
          </div> */}
        </div>
      </section>
    </main>
  );
}
const SubjectCard = ({ href, title, description, disabled }) => (
  <Link
    href={href || "/"}
    className="w-full block my-4 md:my-6 border bg-white border-gray-300 p-4 px-4 cursor-pointer rounded-xl"
  >
    <div className="flex items-center">
      <div className="text-left">
        <h2 className="text-lg md:text-xl font-normal text-gray-800">
          {title}
        </h2>
        <p className="text-gray-500 text-[14px] pr-5">{description}</p>
      </div>
      <div className="ml-auto">
        <ChevronRight className="pl-2 text-gray-600" size={30} />
      </div>
    </div>
  </Link>
);

const SubjectCards = () => {
  const subjects = [
    {
      href: "/",
      title: "🔨 Chat Personalizado",
      description: "Crea y adapta tu chat con IA a tus necesidades.",
    },
    {
      href: "/central/chat",
      title: "📚 Chat para Estudiar",
      description:
        "Comparte conocimientos y resuelve dudas en un chat estudiantil.",
    },
    {
      href: "/hub/english",
      title: "🇺🇸 Chat para inglés",
      description: "Practica y mejora tu inglés de forma interactiva.",
    },
    {
      href: "/hub/recetas-ai",
      title: "👨‍🍳 Recetas de comida",
      description: "Recetas rápidas y prácticas para cocinar fácil y sabroso.",
      icon: <ChefHat />,
    },
    {
      href: "/",
      title: "🧍‍♂️ Mi mejor amigo (muy pronto...)",
      description:
        "Chat para que interactues con una persona que te escuche y te de consejos",
    },
    {
      href: "/hub/recetas-ai",
      title: "Traducción de documentos",
      disabled: true,
    },
    { href: "/hub/recetas-ai", title: "Resumir documentos", disabled: true },
  ];

  return (
    <div className="">
      {subjects.map(
        (subject, index) =>
          !subject.disabled && (
            <SubjectCard
              key={index}
              href={subject.href}
              title={subject.title}
              description={subject.description}
            />
          )
      )}
    </div>
  );
};
