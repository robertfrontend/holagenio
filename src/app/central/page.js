"use client";
import React, { useState, useEffect } from "react";
import { Calculator, Languages, Sailboat, BookA } from "lucide-react";
import AuthForm, { checkAuthStatus } from "@/components/AuthForm";
import ChatWindow from "@/components/chat/ChatWindow";

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

const subjects = [
  { name: "Matemáticas", path: "/matematicas" },
  { name: "Lengua", path: "/lengua" },
  { name: "Historia", path: "/historia" },
  { name: "Inglés", path: "/ingles" },
  // Agrega más materias según necesites
];

const SubjectCards = () => {
  return (
    <div className="flex flex-col gap-6">
      <div
        className="bg-[#ff47562f] text-[#ff4756] shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition
        flex flex-row items-center justify-center"
      >
        {/* <Calculator size={30} /> */}
        <h2 className="text-2xl font-normal ">Start Chat</h2>
      </div>
      {/* <div
        className="bg-[#ff47562f] text-[#ff4756] shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition
        flex flex-row items-center justify-center"
      >
        <BookA size={30} />
        <h2 className="text-2xl font-normal ">Lengua</h2>
      </div>
      <div
        className="bg-[#ff47562f] text-[#ff4756] shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition
        flex flex-row items-center justify-center"
      >
        <Sailboat size={30} />
        <h2 className="text-2xl font-normal ">Historia</h2>
      </div>
      <div
        className="bg-[#ff47562f] text-[#ff4756] shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition
        flex flex-row items-center justify-center"
      >
        <Languages size={30} />
        <h2 className="text-2xl font-normal ">Inglés</h2>
      </div> */}
    </div>
  );
};
