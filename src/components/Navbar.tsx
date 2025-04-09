"use client";
import React, { useState } from "react";
import { logoColorfull } from "@/img/image";
import Image from "next/image";
import Link from "next/link";
import { navitem } from "@/constant/data";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <main className="sticky top-0 z-10 max-w-screen-xl mx-auto">
      <div className="w-full bg-darkBackground h-16 ">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex justify-between items-center relative">
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
                  {/* <span className={`h-[2px] w-full bg-white inline-flex absolute top-0 left-0 translate-x-[105%] group-hover:-translate-x-[105%] duration-700`}></span> */}
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
            <motion.ul
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className=" md:hidden flex flex-col bg-darkBackground gap-5 text-white  absolute top-16 right-0 px-5 py-3"
            >
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
            </motion.ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default Navbar;
