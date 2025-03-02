"use client";
import React from "react";
import { FileText, Phone, CarIcon, Search } from "lucide-react";
import CardService from "./CardService";

const Principal = () => {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-6 sm:px-6 lg:px-2">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Boston&apos;s Community Services
          </h1>
          <p
            className="mt-3 max-w-md mx-auto text-base 
          text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          ></p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardService
            title="Lost & Found"
            description="Helping you recover lost items or report found ones in the community."
            icon={<Search size={40} className="text-gray-900" />}
          />
        </div>
      </div>
    </main>
  );
};

// const LicenciaDetail = () => (
//     <>
//         <p className="mb-6 text-lg">🚗 Nuestro servicio de asistencia para obtener la licencia de conducir de MA está diseñado para simplificar todo el proceso. Ofrecemos ayuda en:</p>
//         <ul className="list-none space-y-3 mb-6">
//             <li className="flex items-start">
//                 <span className="mr-2 text-primary">📄</span>
//                 <span>Recopilación y subida de documentos necesarios (identificación, prueba de residencia, etc.)</span>
//             </li>
//             <li className="flex items-start">
//                 <span className="mr-2 text-primary">📚</span>
//                 <span>Preparación para el examen teórico, incluyendo materiales de estudio en español</span>
//             </li>
//             <li className="flex items-start">
//                 <span className="mr-2 text-primary">🗓️</span>
//                 <span>Agendamiento de citas para el examen teórico y la prueba de manejo</span>
//             </li>
//             <li className="flex items-start">
//                 <span className="mr-2 text-primary">🚙</span>
//                 <span>Información sobre los requisitos del vehículo para la prueba de manejo</span>
//             </li>
//             <li className="flex items-start">
//                 <span className="mr-2 text-primary">💳</span>
//                 <span>Asistencia en el proceso de solicitud y pago de la licencia</span>
//             </li>
//         </ul>
//         <p className="text-lg mb-6">Para comenzar el proceso o obtener más información:</p>
//         <div className="bg-gray-100 p-4 rounded-lg mb-6">
//             <h3 className="text-xl font-semibold mb-4">Precios de nuestros servicios:</h3>
//             <ul className="space-y-2">
//                 <li className="flex justify-between">
//                     <span>Permiso de conducir:</span>
//                     <span className="font-semibold">$30</span>
//                 </li>
//                 <li className="flex justify-between">
//                     <span>Prueba de manejo:</span>
//                     <span className="font-semibold">$35</span>
//                 </li>
//                 <li className="flex justify-between">
//                     <span>Licencia:</span>
//                     <span className="font-semibold">$50</span>
//                 </li>
//                 <small className="text-gray-500 italic">Estos precios provienen directamente del RMV (Registry of Motor Vehicles)</small>
//                 <li className="flex justify-between border-t pt-2 mt-2">
//                     <span className="font-semibold">Subtotal:</span>
//                     <span className="font-semibold">$115</span>
//                 </li>
//                 <li className="flex justify-between text-primary">
//                     <span>Fee de BizCategories:</span>
//                     <span className="font-semibold">$35</span>
//                 </li>
//                 <li className="flex justify-between border-t pt-2 mt-2 text-lg font-bold text-green-600">
//                     <span>Total:</span>
//                     <span>$150</span>
//                 </li>

//             </ul>
//         </div>
//         <h1>hola wolrd</h1>
//         <small className="text-gray-500 italic">
//             Estos precios provienen directamente del RMV (Registry of Motor Vehicles)
//         </small>
//         <div className="mt-4 space-y-2 text-center flex flex-col justify-center items-center">
//             <StripeButton />
//             <div className="divider">Contactanos para mas información</div>
//             <WhatsappButton />
//             {/* <WhatsappButton />
//             <GmailButton /> */}
//         </div>

//     </>
// )

export default Principal;
