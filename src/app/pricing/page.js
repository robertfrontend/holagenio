import { Check } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main
      className="flex flex-col min-h-screen bg-background w-full md:mx-auto pb-[8em]
     pt-[6em] md:pt-[10em] relative px-2 md:px-4"
    >
      <div className="py-4 text-center flex flex-col justify-center items-center">
        <img
          src="https://i.postimg.cc/9ftHvYPK/logo-holagenio.png"
          className="w-[150px]"
        />
        <h1 className="text-3xl md:text-4xl mt-0 font-bold mb-4 text-gray-700">
          AI Sin Complicaciones.
          <br />
          Úsala en tu Día a Día
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-light px-10">
          Herramientas de Inteligencia Artificial simples, rápidas y asequibles
          para el día a día.
        </p>
        <h1 className="text-3xl font-bold pt-4">Nuestros precios</h1>
      </div>

      <div
        className="flex flex-col md:flex-row justify-center items-center gap-4 
      md:gap-10 pt-2 md:pt-10 px-10 "
      >
        <CardPricing />
      </div>
    </main>
  );
}

const CardPricing = () => (
  <div className="bg-white w-full min-h-[20vh] my-2 rounded-md py-4 px-4 shadow-sm border border-gray-200 pb-4  text-center">
    <h3 className="font-semibold text-2xl text-gray-800">Plan Estandar</h3>
    <ul className="text-gray-600 pt-4 text-left md:text-center w-full">
      <li className="mb-2 text-md font-light flex gap-2 justify-start md:justify-center">
        <Check className="text-green-600" />
        +1000 respuestas diarías
      </li>
      <li className="mb-2 text-md font-light flex gap-2 justify-start md:justify-center">
        <Check className="text-green-600" />
        Todas las herramientas disponibles
      </li>
      <li className="mb-2 text-md font-light flex gap-2 justify-start md:justify-center">
        <Check className="text-green-600" />
        Acceso temprano a nuevas herramientas
      </li>
      <li className="mb-2 text-md font-light flex gap-2 justify-start md:justify-center">
        <Check className="text-green-600" />
        Guarda tus respuestas de cada chat.
      </li>
    </ul>
    <div className="text-center pb-4">
      <h3 className="text-4xl font-bold text-gray-800 ">$8</h3>
      <p className="text-gray-400">Por usuario / Mensual</p>
    </div>
    <div className="text-center">
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
);

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
