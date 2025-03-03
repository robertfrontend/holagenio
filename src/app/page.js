"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Principal from "./comunity-services/components/Principal";

export default function Home() {
  return (
    <main className="">
      <section
        className="
        relative
        w-full 
        min-h-[100vh]
        flex 
        flex-col 
        items-center 
        justify-center 
        overflow-hidden
      "
      >
        <div className="text-center px-4 max-w-2xl">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            Aprende mas rápido, impulsa tu aprendizaje.
          </h1>
          <p className="text-md md:text-xl text-gray-600 mb-8">
            Descubre cómo nuestra plataforma de aprendizaje impulsada por
            inteligencia artificial empodera a estudiantes con herramientas
            innovadoras y contenidos adaptados a sus necesidades.{" "}
          </p>
          <div className="text-center mb-8">
            <p className="text-md md:text-lg text-gray-600">
              <strong>Estudiantes:</strong> Matemáticas, lengua, historia,
              inglés, etc.
            </p>
            {/* <p>
              <strong>Trabajadores:</strong> Redacción de correos, informes,
              etc.
            </p> */}
            {/* <p>
              <strong>Emprendedores:</strong> Ayuda en planes de negocio,
              marketing, redes sociales.
            </p> */}
          </div>
          <div className="text-center flex justify-center items-center">
            <Link href={"/auth"}>
              <button className="px-6 py-3 bg-[#ff47562f] text-[#ff4756] font-semibold rounded-md flex items-center justify-center space-x-2">
                Únete a la lista de espera <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-16 px-4 max-w-xl">
          <h2 className="text-2xl font-semibold mb-2">
            Introducing Deep Tutor
          </h2>
          <p className="text-gray-600 mb-4">
            Learn more about how AI is the future.{" "}
            <a
              href="#learn-more"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Learn More
            </a>
          </p>
          <a
            href="#launch-info"
            className="text-blue-600 underline hover:text-blue-800"
          >
            View our Launch Info
          </a>
        </div>
      </section>
    </main>
  );
}
