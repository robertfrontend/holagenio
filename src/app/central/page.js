"use client";
import React, { useState, useEffect } from "react";
import {
  Calculator,
  Languages,
  Sailboat,
  BookA,
  ChevronRight,
} from "lucide-react";
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
    <main className="flex flex-col min-h-screen bg-background w-full md:mx-auto pt-[10em] relative px-4">
      <header className="relative w-full flex flex-col items-center justify-center mb-10">
        <div className="text-center px-4 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            ¿Qué te gustaría aprender hoy?
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
const SubjectCard = ({ href, title, disabled }) => (
  <Link href={href}>
    <div
      className="border-b rounded-lg p-4 cursor-pointer 
      flex flex-row items-center justify-center"
    >
      <h2 className="text-xl font-normal text-blue-600">{title}</h2>
      <ChevronRight className="pl-2 text-blue-600" size={30} />
    </div>
  </Link>
);

const SubjectCards = () => {
  const subjects = [
    { href: "/central/chat", title: "Chat Estudiar" },
    { href: "/hub/english", title: "Chat para inglés" },
    { href: "/hub/recetas-ai", title: "Recetas de comida para hombres" },
    {
      href: "/hub/recetas-ai",
      title: "Traducción de documentos",
      disabled: true,
    },
    { href: "/hub/recetas-ai", title: "Resumir documentos", disabled: true },
  ];

  return (
    <div className="flex flex-col bg-white border">
      {subjects.map(
        (subject, index) =>
          !subject.disabled && (
            <SubjectCard
              key={index}
              href={subject.href}
              title={subject.title}
            />
          )
      )}
    </div>
  );
};
