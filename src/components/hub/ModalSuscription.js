import { Check } from "lucide-react";
import React from "react";

export default function ModalSuscription() {
  return (
    <dialog id="modalGetpremium" className="modal">
      <div className="modal-box">
        <div className="text-center mt-4">
          <img
            src="https://i.postimg.cc/9ftHvYPK/logo-holagenio.png"
            className="w-[100px] mx-auto"
          />
          <h3 className="font-bold text-2xl md:text-4xl text-center text-gray-800">
            Actualiza tu plan
          </h3>
          <p className=" md:py-4 text-md font-light">
            Si desea seguir utilizando la plataforma de forma ilimitada,
            adquiera el plan estándar el plan estándar.
          </p>

          <div
            className="bg-white w-full min-h-[20vh] my-2 rounded-md py-4 px-4 shadow-sm border border-gray-200
                                    pb-4  text-center"
          >
            <h3 className="font-semibold text-2xl text-gray-800">
              Plan Estandar
            </h3>
            <ul className="text-gray-600 pt-4 text-left md:text-center w-full">
              <li className="mb-2 text-md font-light flex gap-2 justify-start md:justify-center">
                <Check />
                Todas las herramientas disponibles
              </li>
              <li className="mb-2 text-md font-light flex gap-2 justify-start md:justify-center">
                <Check />
                Acceso temprano a nuevas herramientas
              </li>
              <li className="mb-2 text-md font-light flex gap-2 justify-start md:justify-center">
                <Check />
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
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn underline">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
