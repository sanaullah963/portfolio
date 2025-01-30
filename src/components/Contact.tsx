"use client";
// https://formsubmit.co/el/wutunu
import Container from "./Container";
import Box from "./Box";
import BoxHeadding from "./BoxHeadding";
import Image from "next/image";
import { contactimage } from "@/img/image";
import { contactBoxArray, contuctInputArray } from "@/constant/data";
import Link from "next/link";
import { useState } from "react";

function Contant() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsAppNumber: "",
    number: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <Container>
        <Box className={"bg-lightBackground pt-7 pb-3"}>
          <BoxHeadding headding={"contact me"} className={"mb-8"} />
          {/* box section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {contactBoxArray.map((i) => (
              <div key={i.headding} className="bg-darkBackground px-3 py-9">
                <div className="flex items-center gap-x-3 mb-1">
                  <BoxHeadding
                    headding={i.headding}
                    className={"text-lightBackground mb-0"}
                  />
                  <p className=" text-center text-colorfullText animate-pulse text-2xl">
                    {<i.icon />}
                  </p>
                </div>
                <h2 className="bg-colorfullText/30 text-white py-2 text-center">
                  {i.address}
                </h2>
                <div className="text-center mt-7">
                  <Link
                    href={i.BTNurl}
                    target="_blank"
                    className="bg-colorfullText py-2 px-3 text-xl inline-block text-lightBackground capitalize rounded-md hover:bg-lightBackground hover:text-darkText duration-300"
                  >
                    {i.button}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Box>
        {/* input section */}
        <Box className={"bg-white my-10"}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* left-side image section */}
            <div className="mb-10 md:mb-0">
              <Image
                src={contactimage}
                alt="contact image w-full"
                className="m-auto w-[60%]"
              />
            </div>
            <form
              target="_blank"
              action={`https://formsubmit.co/intisarsanaillah@gmail.com`}
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-10 mb-10">
                {contuctInputArray.map((i) => (
                  <div key={i.id} className="">
                    <input
                      type={i.type}
                      name={i.name}
                      placeholder={i.placeholder}
                      onChange={handleChange}
                      className=" border-b-2 border-colorfullText px-2 pt-1 pb-2 outline-none capitalize w-full"
                    />
                  </div>
                ))}
              </div>
              <textarea
                name="message"
                placeholder="Type Your Messag"
                onChange={handleChange}
                className="w-full p-2 min-h-[100px] outline-none mb-3 border border-colorfullText"
              ></textarea>
              {/* Hidden Input for Honeypot Spam Protection */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Hidden Input for Redirecting After Submission */}
              <input
                type="hidden"
                name="_next"
                value={`https://intisar-sanaullah.vercel.app/contact`}
              />

              <button
                type="submit"
                className="bg-colorfullText text-lightBackground hover:bg-darkBackground duration-300 w-full py-3 text-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </Box>
      </Container>
    </main>
  );
}

export default Contant;
