"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import { AuthContextProvider } from "./context/AuthContext";

import { Analytics } from "@vercel/analytics/react";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Lost and Found Hub",
//   description: "Lost and Found Hub",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Header />
        {/* <div className="flex flex-col min-h-screen bg-background w-full  md:mx-auto pt-20 relative px-4"> */}
        <div className="">{children}</div>
        <div className="text-center py-8">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025 Domaprende.
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
