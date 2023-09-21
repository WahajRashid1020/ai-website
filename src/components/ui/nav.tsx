"use client";
import React from "react";
import Link from "next/link";
import { XCircle, MenuIcon, Search, MapPin, SearchIcon } from "lucide-react";

const NavBar: React.FC = () => {
  const [nav, setnav] = React.useState<boolean>(false);
  const handleNave = () => {
    setnav(!nav);
  };

  const [navBackground, setNavBackground] =
    React.useState<string>("transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = 4;
      const isScrolled = window.scrollY > offset;
      setNavBackground(isScrolled ? "white" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white p-4">
      <div
        className={
          nav
            ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-white bg-basic ease-in duration-300 z-10"
            : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-white bg-basic ease-in duration-300 z-10"
        }
      >
        {/* Mobile menu content */}
        <ul className="text-center">
          <li
            onClick={handleNave}
            className="text-2xl py-2 hover:font-bold hover:underline"
          >
            <Link href="/about">Instructor</Link>
          </li>{" "}
          <li
            onClick={handleNave}
            className="text-2xl py-2 hover:font-bold hover:underline"
          >
            <Link href="/about"> Flight School</Link>
          </li>{" "}
          <li
            onClick={handleNave}
            className="text-2xl py-2 hover:font-bold hover:underline"
          >
            <Link href="/about"> Sign Up</Link>
          </li>
        </ul>
      </div>

      <div className="container mx-auto flex items-center  justify-between">
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
        <div className="flex felx-row space-x-4 md:hidden">
          <div className="border-basic border-[1px] p-[10px] rounded-[8px]">
            <SearchIcon className=" text-basic block md:hidden  z-100" />
          </div>
          <div
            onClick={handleNave}
            className="block md:hidden z-10 cursor-pointer"
          >
            {nav ? (
              <XCircle className="text-secondary block md:hidden mr-4" />
            ) : (
              <div className="bg-basic p-[10px] rounded-[8px]">
                <MenuIcon className=" text-white block md:hidden  z-100" />
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 flex-grow">
          <div className="relative flex-grow mx-4">
            <input
              type="text"
              className=" border-basic border-[1px] rounded-md py-4 px-4 w-full flex items-center outline-secondary"
              placeholder="Search Instructors, Aircrafts..."
            />
            <div className="absolute right-[6rem] top-1/2 transform -translate-y-1/2">
              <MapPin className="text-secondary hover:text-gray-700 cursor-pointer" />
            </div>
            <button className="absolute bg-basic px-[16px] py-[8px] right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-yellow-[100] rounded-[6px]">
              Search
            </button>
          </div>

          <button>Instructor</button>
          <button>Flight School</button>
          <button className="  bg-basic px-4 py-4   text-black hover:text-yellow-[100] rounded-[8px]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
