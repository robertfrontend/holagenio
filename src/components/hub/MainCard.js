import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const MainCard = ({ children, title, description }) => {
  return (
    <div
      className="flex flex-col items-center justify-start 
    w-[100%] md:w-[800px] min-h-[40vh] mx-auto
    pb-10 border border-gray-200 rounded-md bg-white shadow-lg px-2 md:p-6"
    >
      <div className="w-full pt-4 px-2">
        <Link href={"/"} className="flex underline  items-center text-gray-600">
          <ArrowLeft size={18} /> Volver atrás
        </Link>
      </div>
      <header className="px-4 pt-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold pt-4 text-gray-700">
          {title || "title example"}
        </h1>
        <p className="mt-2 font-light px-2">
          {description ||
            ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim,
                    quam totam quibusdam sapiente hic placeat!`}
        </p>
      </header>
      {children}
    </div>
  );
};

export default MainCard;
