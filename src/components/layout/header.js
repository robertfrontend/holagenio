"use client";
import { CircleUser, LogOut } from "lucide-react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation"; // Change this import
import Link from "next/link";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";

const Header = () => {
  const { user, logOut } = UserAuth();
  const router = useRouter();

  useEffect(() => {}, [user]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.push("/auth"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="navbar bg-base-100 z-50 fixed border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="text-xl" href="/">
          {/* <img src="./logo-holagenio.png" className="w-[150px]" /> */}
          <img
            src="https://i.postimg.cc/9ftHvYPK/logo-holagenio.png"
            className="w-[150px]"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost avatar">
            <CircleUser />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box 
            z-[1] mt-3 w-[300px] p-2 shadow"
          >
            <li className="py-2">
              {user ? (
                <Link href={"/profile"} className="text-xl">
                  <CircleUser />
                  Profile
                </Link>
              ) : (
                <Link href={"/auth"} className="text-lg">
                  {" "}
                  Iniciar sesión / Crear cuenta
                </Link>
              )}
            </li>
            {/* <li><a>Settings</a></li> */}
            {user && (
              <li className="justify-between">
                <a className="text-xl text-red-500" onClick={handleLogout}>
                  <LogOut />
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
