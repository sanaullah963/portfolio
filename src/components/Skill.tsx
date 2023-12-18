"use client";
import Link from "next/link";
import Box from "./Box";
import BoxHeadding from "./BoxHeadding";
import Container from "./Container";
import { skillArray, skillHeaddingArray } from "@/constant/data";
import { useState } from "react";


function Skill() {
  const [width, setWidth]=useState('')
  return (
    <main>
      <Container>
        <Box className={"bg-lightBackground"}>
          <BoxHeadding headding={"my skills"} />
          {/* skill headding section */}
          <div className="w-full mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
            {skillHeaddingArray.map((i) => (
              <div className="w-full cursor-default bg-gray-200 pt-2 px-3 border border-darkBackground" key={i.masseg}>
                <h2 className="capitalize text-2xl text-center font-semibold text-colorfullText">
                  {i.name}
                </h2>
                <p className="mb-2 text-gray-700">{i.masseg}</p>
              </div>
            ))}
          </div>
          {/* auther skill section */}
          <div className="my-10">
            <h2 className="text-2xl mb-5 text-colorfullText capitalize font-semibold">my other skill</h2>
            {skillArray.map((i) => (
              <Link
                key={i.name}
                href={i.url}
                target="_blank"
                className="capitalize border border-colorfullText rounded-md text-xl px-3 py-2 hover:bg-darkBackground hover:text-white duration-300 mx-2 my-2 inline-flex"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </Box>
      </Container>
    </main>
  );
}

export default Skill;
