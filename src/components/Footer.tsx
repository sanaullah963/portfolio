"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { logoColorfull } from "@/img/image";
import BoxHeadding from "./BoxHeadding";
import { footerSocialMedia, navitem, services } from "@/constant/data";
import Link from "next/link";

function Footer() {
  return (
    <main>
      <div className="bg-darkBackground w-full py-1">
        <Container
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 md:gap-x-8 gap-y-12 md:gap-y-0"
          }
        >
          {/* footer 1st div */}
          <div className=" ">
            <Image
              src={logoColorfull}
              alt="logo image "
              className="w-36 mx-auto mb-5"
            />
            <p className="text-justify text-lightBackground">
              I am always open to discussing your project, improving your online
              presence, or helping with Your website&apos;s design and converting
              challenges.
            </p>
            <div className="flex mt-5 justify-center">
              <Link href={'/contact'} className="bg-colorfullText text-xl py-3 px-4 rounded-md font-semibold text-white hover:bg-semilightText hover:text-colorfullText duration-300">Contact Me</Link>
            </div>
          </div>
          {/* footer secend div */}
          <div>
            <BoxHeadding
              headding={"menu"}
              className={"text-colorfullText text-center"}
            />
            <ul className="flex flex-col items-start gap-2 text-white ">
              {navitem.map((i) => (
                <Link key={i.titel} href={i.url}>
                  <li className="uppercase cursor-pointer relative left-5 group overflow-hidden hover:text-colorfullText font-semibold duration-200">
                    {i.titel}
                    <span className="h-[2px] w-full bg-white inline-flex absolute bottom-0 left-0 -translate-x-[105%] group-hover:translate-x-[105%] duration-500 "></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* footer 3rd div */}
          <div className="">
            <BoxHeadding
              headding={"my services"}
              className={"text-colorfullText text-center"}
            />
            <ul className="flex flex-col items-start gap-3 text-white ">
              {services.map((i) => (
                <Link key={i.titel} href={i.url}>
                  <li className="uppercase cursor-pointer relative group overflow-hidden hover:text-colorfullText duration-200">
                    {i.titel}
                    <span className="h-[2px] w-full bg-white inline-flex absolute bottom-0 left-0 -translate-x-[105%] group-hover:translate-x-[105%] duration-500 "></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* foter 4th div */}
          <div>
            <BoxHeadding
              headding={"rech me"}
              className={"text-colorfullText text-center"}
            />
            {footerSocialMedia.map((i) => (
              <Link key={i.icon} href={i.url} target={i.target}>
                <div className="flex  items-center group cursor-pointer">
                  <div className="flex justify-start bg-darkBackground z-10">
                    <p className=" h-14 w-14 flex justify-center items-center text-4xl rounded-full border border-colorfullText  text-colorfullText  ">
                      {" "}
                      {<i.icon />}
                    </p>
                  </div>
                  <div className="ps-3 overflow-hidden my-2">
                    <p className="uppercase text-lightBackground -translate-x-[160%] group-hover:translate-x-0 duration-150">
                      {i.iconName}
                    </p>
                    <hr className="-translate-x-[160%] group-hover:translate-x-0 duration-150 delay-100" />
                    <p className="text-gray-400 -translate-x-[160%] group-hover:translate-x-0 duration-150 delay-200">
                      {i.username}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>

        <Container>
          <hr />
          <div className="flex justify-between mt-8">
            <p className="text-lightBackground">
              © 2022 Intisar Sanaullah All rights reserved.
            </p>
            <Link
              href={"/resume"}
              target="_blank"
              className="underline text-blue-500"
            >
              View Resume
            </Link>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default Footer;
