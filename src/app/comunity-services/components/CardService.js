import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardService = ({
  icon,
  title,
  description,
  modalId,
  children,
  disabled,
}) => {
  return (
    <>
      <ServiceCard
        icon={icon}
        title={title}
        description={description}
        modalId={modalId}
        disabled={disabled}
      >
        {children}
      </ServiceCard>
    </>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  modalId,
  children,
  disabled,
}) => {
  return (
    <div className="px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 hover:bg-gray-50 transition-colors duration-150">
      <dt
        className={`text-md md:text-xl font-medium ${disabled ? "text-gray-400" : "text-gray-900"} flex items-center`}
      >
        <span className="text-white"> {!disabled ? icon : "🔜"}</span>
        <span className="ml-2">{title} </span>
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <p>{description}</p>
        {!disabled && (
          <Link
            href={"/lost-found"}
            className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Go there <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
          </Link>
        )}
      </dd>
      {/* {disabled && "Muy pronto disponible..."} */}
      <ServiceModal id={modalId} title={title}>
        {children}
      </ServiceModal>
    </div>
  );
};

const ServiceModal = ({ id, title, children }) => {
  return (
    <dialog id={id} className="modal modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="py-4">{children}</div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CardService;
