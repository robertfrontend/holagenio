"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, ChefHat } from "lucide-react";
import AuthForm, { checkAuthStatus } from "@/components/AuthForm";
import ChatWindow from "@/components/chat/ChatWindow";
import Link from "next/link";

export default function Page() {
  const [showAuthForm, setShowAuthForm] = useState(true);

  useEffect(() => {
    const unsubscribe = checkAuthStatus((authState) => {
      setShowAuthForm(!authState.isAuthenticated);
    });

    return () => unsubscribe();
  }, []);
  return (
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[6em] md:pt-[10em] relative px-4">
      <header className="relative w-full flex flex-col items-center justify-center mb-10">
        <div className="text-center px-4 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Que te gustaría hacer hoy?
          </h1>
          <p className="text-lg md:text-xl">
            Selecciona una de las opciones a continuación para recibir ayuda con
            AI.
          </p>
        </div>
      </header>
      {/* <ChatWindow /> */}
      <div className="w-full md:w-[600px] mx-auto">
        <SubjectCards />
      </div>
    </main>
  );
}
const SubjectCard = ({ href, title, description, disabled }) => (
  <Link
    href={href}
    className="w-full block my-4 md:my-6 border bg-white border-gray-300 p-4 px-4 cursor-pointer rounded-xl"
  >
    <div className="flex items-center">
      <div>
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
