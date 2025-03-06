"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ChevronRight, ChefHat } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pb-[10em] pt-[6em] md:pt-[10em] relative px-2 md:px-4">
      <section className="relative w-full pt-10 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Para todo el mundo
          </h1>
          <p className="text-md md:text-xl text-gray-600 mb-8">
            Herramientas AI funcionales para todo el mundo. Sin complicaciones.
          </p>
          <div className="w-full">
            <SubjectCards />
          </div>
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
        <p className="text-gray-500 text-[14px] pr-10">{description}</p>
      </div>
      <div className="ml-auto">
        <ChevronRight className="pl-2 text-gray-600" size={30} />
      </div>
    </div>
  </Link>
);

const SubjectCards = () => {
  const subjects = [
    // {
    //   href: "/central",
    //   title: "Chat General",
    //   description: "Chat generar donde puedes usar la AI libremente",
    // },
    {
      href: "/central/chat",
      title: "📚Chat para Estudiar",
      description: "Chat especificamente para estudiar",
    },

    {
      href: "/hub/english",
      title: "🇺🇸 Chat para inglés",
      description: "Chat especificamente para ingles",
    },
    {
      href: "/hub/recetas-ai",
      title: "👨‍🍳Recetas de comida ",
      description: "Chat especificamente para recetas",
      icon: <ChefHat />,
    },
    {
      href: "/central",
      title: "🧍‍♂️Mi mejor amigo (muy pronto...)",
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
