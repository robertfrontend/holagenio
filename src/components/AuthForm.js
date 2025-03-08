"use client";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { UserAuth } from "@/app/context/AuthContext";

// Función para verificar el estado de autenticación
export const checkAuthStatus = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback({ isAuthenticated: true, user });
      callback({ isAuthenticated: false, user: null });
    }
  });
};

export default function AuthForm() {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

  const { user, logOut } = UserAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    console.log(user, "user loging");

    if (user) {
      window.location.href = "/profile";
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return (
      <div className="text-center p-6 rounded-md shadow-md bg-white mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¡Bienvenido, {user.displayName}!
        </h2>
        <p className="text-lg text-gray-800 mb-6">
          Ya has iniciado sesión y estás listo para comenzar.
        </p>
        <div className="text-center flex justify-center items-center">
          <button
            onClick={() => (window.location.href = "/chat")}
            className="px-6 py-3  bg-blue-600 text-white font-semibold rounded-md flex items-center justify-center space-x-2"
          >
            Ir a la página principal <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
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
        px-4 
      "
      // Opcional: puedes utilizar un background con un patrón de cuadrícula
      // usando una imagen o un gradient especial
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/tJVbSv8D/0a352d89-c2a0-478a-9131-7823fadb4681.jpg)",
        backgroundSize: "100%",
      }}
    >
      <div className="text-center p-6 rounded-xl shadow-md w-[100%] md:w-[400px] min-h-[30vh] justify-center items-center flex flex-col bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Inicio de sesión / Registro
        </h2>
        <p>Bienvenido de nuevo Inicia sesión para continuar tu viaje</p>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full px-4 py-2 mt-4 text-white bg-blue-500 
        rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
            />
          </svg>
          Iniciar sesión con Google
        </button>
      </div>
    </section>
  );
}
