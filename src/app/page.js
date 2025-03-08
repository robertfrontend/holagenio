"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

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
          <div>
            <div class="pb-10">
              <h1 className="text-3xl font-bold">Nuestros precios</h1>
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
              <FreeCard />
              <PremiumCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const FreeCard = () => (
  <div className="card w-[80%] md:w-96 bg-base-100 shadow-sm border">
    <div className="card-body">
      {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Gratis</h2>
        <span className="text-xl">$0/mo</span>
      </div>
      <ul className="mt-6 flex flex-col gap-2 text-xs">
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-green-600 mx-2" />
          <span>10 respuestas diarías</span>
        </li>
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-green-600 mx-2" />
          <span>Todas las herramientas disponibles</span>
        </li>
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-gray-600 mx-2" />
          <span className="line-through">
            {" "}
            Acceso temprano a nuevas herramientas
          </span>
        </li>

        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-gray-600 mx-2" />
          <span className="line-through">
            {" "}
            Guarda tus respuestas de cada chat
          </span>
        </li>
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-gray-600 mx-2" />
          <span className="line-through"> Sin publicidad</span>
        </li>
      </ul>
      <div className="text-center mt-2">
        <div
          className=" text-gray-400  py-2 px-10 rounded-md 
                 w-full d-block"
        >
          Plan Actual
        </div>
      </div>
    </div>
  </div>
);

const PremiumCard = () => (
  <div className="card w-[80%] md:w-96 bg-base-100 border border-blue-600">
    <div className="card-body">
      {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Premium</h2>
        <span className="text-xl">$8/mo</span>
      </div>
      <ul className="mt-6 flex flex-col gap-2 text-xs">
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-green-600 mx-2" />
          <span>+1000 respuestas diarías</span>
        </li>
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-green-600 mx-2" />
          <span>Todas las herramientas disponibles</span>
        </li>
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-green-600 mx-2" />
          <span> Acceso temprano a nuevas herramientas</span>
        </li>
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-green-600 mx-2" />
          <span> Guarda tus respuestas de cada chat</span>
        </li>
        <li className="flex justify-center items-start text-md">
          <Check size={18} className="text-green-600 mx-2" />
          <span>Sin publicidad</span>
        </li>
      </ul>
      <div className="text-center mt-2">
        <a href="https://buy.stripe.com/9AQcOP4AjcmO9iM7sK">
          <button
            className="bg-blue-500 text-white py-2 px-10 rounded-md hover:bg-blue-600
                 w-full d-block"
          >
            Suscribirse
          </button>
        </a>
      </div>
    </div>
  </div>
);

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
      href: "/hub/consejos",
      title: "☮️ Chat de consejos personales y emocionales",
      description: "Chat de consejos personales y emocionales",
    },
    {
      href: "/hub/suenos",
      title: "🛌 Significado de los sueños",
      description: "Significado de los sueños",
    },
    {
      href: "/hub/english",
      title: "🇺🇸 Chat para inglés",
      description: "Practica y mejora tu inglés de forma interactiva.",
    },
    {
      href: "/",
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
