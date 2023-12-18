"use client";
import Image from "next/image";
import Box from "./Box";
import BoxHeadding from "./BoxHeadding";
import Container from "./Container";
import { protfolioImageArr } from "@/constant/data";
import Link from "next/link";
import CardParent from "./CardParent";

function Protfolio() {

  return (
    <main>
      <Container>
        <Box className={"bg-lightBackground"}>
          <BoxHeadding headding={"my portfolio"} />
          <CardParent>
            {protfolioImageArr.map((i) => (
              <div
                key={i.titel}
                className=" border-[2px] border-colorfullText pb-5 rounded-lg group"
              >
                <div className="overflow-hidden group-hover:overflow-auto scrollbar">
                  <div className="h-[200px] w-full group-hover:-translate-y-[500px]  duration-[5s] delay-500">
                    <Link href={i.link} target="_blank">
                      <Image
                        src={i.img}
                        alt="protfolio image"
                        className=" rounded-t-lg"
                      />
                    </Link>
                  </div>
                </div>
                <div className=" mx-3 cursor-default">
                  <h1 className=" relative text-xl text-darkBackground font font-semibold mt-4 capitalize overflow-hidden ">
                    {i.titel}
                    <span
                      className="h-[2px] w-full bg-colorfullText inline-block absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 duration-300
                    "
                    ></span>
                  </h1>
                  {/* language section */}
                  <div className="h-8 overflow-hidden">
                    <p className="text-gray-600 -translate-y-[100%] group-hover:translate-y-0 delay-200 duration-300 text-sm capitalize">
                      {i.language}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardParent>
        </Box>
      </Container>
    </main>
  );
}

export default Protfolio;
