"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center px-4 max-w-2xl">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            AI Para todo el mundo
          </h1>
          <p className="text-md md:text-xl text-gray-600 mb-8">
            Herramientas AI funcionales para todo el mundo. Sin complicaciones.
          </p>
          <div className="text-center mb-8">
            <p className="text-md md:text-lg text-gray-600">
              <strong>Herramientas de:</strong> Aprendizaje, comida, inglés,
              etc.
            </p>
          </div>
          <div className="text-center flex justify-center items-center">
            <Link href={"/central"}>
              <button className="px-6 py-3 bg-[#ff47562f] text-[#ff4756] font-semibold rounded-md flex items-center justify-center space-x-2">
                Únete a la lista de espera <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
