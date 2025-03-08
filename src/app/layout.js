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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Analytics />
        <AuthContextProvider>
          <Header />
          <div
            className="relative full"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/Y0152nXG/sl-072622-51930-13.jpg)",
              backgroundRepeat: "repeat",
              backgroundSize: "60%",
            }}
          >
            <div className="bg-[#ffffffd6]">{children}</div>
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
        </AuthContextProvider>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </body>
    </html>
  );
}
