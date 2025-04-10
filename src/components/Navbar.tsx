"use client";
import React, { useState, useEffect } from "react";
import { logoColorfull } from "@/img/image";
import Image from "next/image";
import Link from "next/link";
import { navitem } from "@/constant/data";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // State for scroll position
  const [scrollY, setScrollY] = useState(0); // To track scroll position
  const router = useRouter();

  // Effect to handle scroll position and toggle fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 550) {
        setIsFixed(true); // Make navbar fixed when scrolling down more than 100px
      } else {
        setIsFixed(false); // Remove fixed navbar when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto">
      <div
        className={`w-full max-w-screen-xl bg-darkBackground h-16 transition-all duration-300 ease-in-out fixed z-10  ${
          scrollY < 10
            ? "translate-y-[0%]"
            : isFixed
            ? " translate-y-[0%]"
            : " -translate-y-[105%]"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex justify-between items-center relative transition-all duration-300 ease-in-out">
          <Link href={"/"}>
            <Image src={logoColorfull} alt="logo image" className="w-16 mt-3" />
          </Link>
          <ul className="hidden md:flex gap-5 text-white">
            {navitem.map((i) => (
              <Link key={i.titel} href={i.url} target={i.target}>
                <li
                  className={`uppercase cursor-pointer relative group overflow-hidden hover:text-colorfullText font-semibold duration-200 ${
                    pathname === i.url && "text-colorfullText"
                  } `}
                >
                  {i.titel}
                  <span
                    className={`h-[2px] w-full bg-white inline-flex absolute bottom-0 left-0 -translate-x-[105%] group-hover:translate-x-[105%] duration-500 ${
                      pathname === i.url && "translate-x-[0%]"
                    }`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
          {/* mobile device menu icon */}
          <div
            className="md:hidden"
            onClick={() => (show ? setShow(false) : setShow(true))}
          >
            <span className=" text-white text-2xl cursor-pointer my-auto">
              {show ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>
          </div>
          {/* mobile device navbar item */}

          {show && (
            <ul className="md:hidden flex flex-col bg-darkBackground gap-5 text-white absolute top-16 left-0 right-0 px-5 py-3 ">
              {navitem.map((i) => (
                <Link key={i.titel} href={i.url}>
                  <li
                    onClick={() => (router.push(i.url), setShow(false))}
                    className={`uppercase cursor-pointer relative group overflow-hidden hover:text-colorfullText font-semibold duration-200 ${
                      pathname === i.url && "text-colorfullText"
                    } `}
                  >
                    {i.titel}
                    <span className="h-[2px] w-full bg-white inline-flex absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-[105%] duration-500 "></span>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default Navbar;
