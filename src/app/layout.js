"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import { AuthContextProvider } from "./context/AuthContext";

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hola Genio</title>
        <meta name="description" content="This is the description of my app." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Analytics />
        <Header />
        <div
          className="relative full"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/tJVbSv8D/0a352d89-c2a0-478a-9131-7823fadb4681.jpg)",
            backgroundRepeat: "repeat",
            backgroundSize: "100%",
          }}
        >
          {children}
        </div>
        <div className="text-center py-8">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025 HolaGenio.com
            <br />
            All Rights Reserved. Created with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/robertfrontend">
              RobertFrontend
            </a>
            .
          </span>
        </div>
      </body>
    </html>
  );
}
