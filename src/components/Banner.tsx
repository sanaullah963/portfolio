"use client";
import React from "react";
import { banner } from "@/img/image";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="bg-darkBackground py-5 w-full min-h-screen/80 flex flex-col justify-center items-center relative">
        <div className="  py-14 px-6 md:px-10 flex flex-col md:flex-row items-center justify-center">
          {/* -----left */}
          <div className= "text-white  mb-14 md:mb-0">
            <h1 className="text-xl md:text-3xl tracking-widest font-semibold uppercase  text-colorfullText">
              Intisar Sanaullah
            </h1>
            <div className="flex gap-3 mb-5 text-gray-300">
              <p className="text-xl md:text-2xl ">I&apos;m</p>
              <p className="text-xl md:text-2xl font-semibold">
                <Typewriter
                  words={[
                    "Next Js developer",
                    "Frontend developer",
                    "Full Stack Developer",
                    "MERN Stack Developer",
                  ]}
                  loop={999}
                  cursor
                  cursorStyle="|"
                  cursorBlinking={false}
                  cursorColor="#00AB5C"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
            </div>
            <div className=" text-lg">
              <p className="mb-2">
                I&apos;m a MERN stack Developer. I specialized in Reactjs,
                Nextjs, Nodejs, MongoDB, Tailwindcss, Express and many more.
              </p>
            </div>
            {/* left button */}
            <button className="px-8 py-2 mt-8 text-xl bg-lightBackground text-darkBackground rounded-lg hover:bg-colorfullText hover:text-white duration-300 me-3">
              <Link href={"/contact"}>Hier Me</Link>
            </button>
            <button className="px-8 py-2 mt-8 text-xl bg-colorfullText text-lightBackground rounded-lg hover:bg-lightBackground hover:text-darkBackground duration-300">
              <Link href={"/resume.pdf"} target="_blank">
                See Resume
              </Link>
            </button>
          </div>
          {/* right */}
          <div className="w-[60%] m-auto iner-2">
            <Image src={banner} alt="banner image" className=" " />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Banner;
