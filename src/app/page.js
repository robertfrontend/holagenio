"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { ChevronRight, ChefHat } from "lucide-react";
import { UserAuth } from "./context/AuthContext";
import { GetDataUserById } from "@/api";

export default function Home() {
  const { user, logOut } = UserAuth();

  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (user) {
      handleDBUser(user.uid);
    }
  }, [user]);

  const handleDBUser = async (id) => {
    const userResponse = await GetDataUserById(id);
    setUserInfo(userResponse);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pb-[8em] pt-[6em] md:pt-[10em] relative px-2 md:px-4">
      <section className="relative w-full pt-10 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center px-2 md:px-4 max-w-2xl">
          <div className="text-left flex justify-center items-center">
            <img
              src="https://i.postimg.cc/9ftHvYPK/logo-holagenio.png"
              className="w-[150px]"
            />
          </div>
          <h1 className="text-3xl md:text-4xl mt-0 font-bold mb-4 text-gray-700">
            AI Sin Complicaciones.
            <br />
            Úsala en tu Día a Día
          </h1>
          <p className="text-md md:text-xl text-gray-700 font-light ">
            Herramientas de Inteligencia Artificial simples, rápidas y
            asequibles para el día a día.
          </p>

          <div className="my-4">
            {user && (
              <>
                <h4 className="text-xl text-gray-700">
                  Welcome back!{" "}
                  <span className=" font-bold">{user.displayName}</span>{" "}
                </h4>
                <span className="badge px-4 py-3 bg-blue-600 text-white">
                  {" "}
                  Plan {userInfo && userInfo.plan}
                </span>
              </>
            )}
          </div>

          <div className="w-full pt-4 md:pt-10">
            <SubjectCards />
          </div>
          <p className="text-[14px] text-blue-500">
            Utilizamos lo ultimo de AI para nuestro modelos
          </p>
        </div>
      </section>
    </main>
  );
}
const SubjectCard = ({ href, title, description, disabled }) => (
  <Link
    href={href || "/"}
    className={`w-full block my-4 md:my-6 border bg-white border-gray-300 p-4 px-4 ${!disabled ? "cursor-pointer" : "cursor-auto"} rounded-xl`}
  >
    <div className="flex items-center">
      <div className="text-left">
        <h2
          className={`text-lg md:text-xl font-normal 
            ${disabled ? "text-gray-400" : "text-gray-800"}  `}
        >
          {title} {disabled && "(muy pronto...)"}
        </h2>
        <p
          className={`${disabled ? "text-gray-400" : "text-gray-500"} text-[14px] pr-5`}
        >
          {description}
        </p>
      </div>
      <div className="ml-auto">
        <ChevronRight
          className={`pl-2  ${disabled ? "text-gray-400" : "text-gray-800"}`}
          size={30}
        />
      </div>
    </div>
  </Link>
);

const SubjectCards = () => {
  const subjects = [
    {
      href: "/hub/chat",
      title: "💬 Chat libre",
      description: "Habla libremente con la AI y aprende de lo que quieras.",
    },

    {
      href: "/hub/recetas-ai",
      title: "👨‍🍳 Recetas de comida",
      description: "Recetas rápidas y prácticas para cocinar fácil y sabroso.",
      // icon: <ChefHat />,
    },
    {
      href: "/hub/english",
      title: "🇺🇸 Chat para inglés",
      description: "Practica y mejora tu inglés de forma interactiva.",
    },
    {
      href: "/hub/recetas-ai",
      title: "🩻 Analizar imagen",
      description: "Entiende cualquier documento o texto que no entiendas.",
      // icon: <ChefHat />,
      disabled: true,
    },
    {
      href: "/",
      title: "🤸‍♂️ Generador de ejercicios rápidos de fitness en casa.",
      // description: "Practica y mejora tu inglés de forma interactiva.",
      disabled: true,
    },
    {
      href: "/",
      title: "💡 Generador de ideas para negocios o emprendimientos personales",
      // description: "Practica y mejora tu inglés de forma interactiva.",
      disabled: true,
    },
    {
      href: "/",
      title: "📸 Generador de descripciones de posts",
      // description: "Practica y mejora tu inglés de forma interactiva.",
      disabled: true,
    },
    {
      href: "/",
      title: "Afirmaciones, frases",
      // description: "Practica y mejora tu inglés de forma interactiva.",
      disabled: true,
    },
    {
      href: "/",
      title: "🔨 Chat Personalizado",
      // description: "Crea y adapta tu chat con IA a tus necesidades.",
      disabled: true,
    },
    {
      href: "/",
      title: "🧍‍♂️ Mi mejor amigo",
      // description:
      //   "Chat para que interactues con una persona que te escuche y te de consejos",
      disabled: true,
    },
    {
      href: "/",
      title: "Traducción de documentos",
      disabled: true,
    },
    { href: "/", title: "Resumir documentos", disabled: true },
  ];

  return (
    <div className="">
      {subjects.map((subject, index) => (
        <SubjectCard
          key={index}
          href={subject.href}
          title={subject.title}
          description={subject.description}
          disabled={subject.disabled}
        />
      ))}
    </div>
  );
};
