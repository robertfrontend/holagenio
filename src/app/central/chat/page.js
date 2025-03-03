"use client";
import React from "react";
import ChatWindow from "@/components/chat/ChatWindow";
export default function Page() {
  return (
    <main
      className="fixed top-0 left-0 w-full h-full 
      bg-white flex flex-row items-center justify-center z-[1000]
    "
    >
      <div className="grid md:grid-cols-[240px_1fr] w-full h-full">
        <div className="bg-gray-50 h-full p-4 hidden md:block">
          <h2 className="text-lg font-bold mb-4">Mis notas</h2>
          <ul className="space-y-2">
            <li className="border-b">Juan Pablo Duarte Tarea</li>
            <li className="border-b">El faro a colon</li>
            <li className="border-b">Las hermanas Mirabal</li>
          </ul>
          <a
            href="/central"
            className="block mt-4 text-blue-500 hover:underline"
          >
            Back to Central Page
          </a>
        </div>
        <div className="w-full h-full">
          <ChatWindow />
        </div>
      </div>
    </main>
  );
}
