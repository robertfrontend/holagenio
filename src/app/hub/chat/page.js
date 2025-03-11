"use client";
import React from "react";
import ChatWindow from "@/components/chat/ChatWindow";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function Page() {
  return (
    <main className=" w-full h-full bg-white flex flex-row items-center justify-center z-[1000]">
      <div className="grid md:grid-cols-[240px_1fr] w-full h-full">
        <div className="bg-gray-50 h-full p-4 hidden md:block mt-[4em]">
          <div className="w-full pt-4 pb-4">
            <Link href={"/"} className="flex underline  items-center text-gray-600">
              <ArrowLeft size={18} /> Volver atrás
            </Link>
          </div>
          <h2 className="text-lg font-bold mb-4">Mis notas</h2>
          {/* <ul className="space-y-2">
            <li className="border-b">Juan Pablo Duarte Tarea</li>
            <li className="border-b">El faro a colon</li>
            <li className="border-b">Las hermanas Mirabal</li>
          </ul> */}
        </div>
        <div className="w-full h-full">
          <ChatWindow />
        </div>
      </div>
    </main>
  );
}
