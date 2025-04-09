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
import axios from "axios";
import qs from 'qs';


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
  // handel submit
  const handelSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add any additional logic here if needed
    const { name, email, number,whatsAppNumber, message } = formData;

    const res = await axios.post("https://formsubmit.co/intisarsanaillah@gmail.com",qs.stringify({
      name,
      email,
      number,
      whatsAppNumber,
      message,
      _captcha: "false",
      // _next: `${process.env.NEXT_PUBLIC_CLIENT_URL}/contact/hierme`,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(res);
    if (res.status === 200) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        number: "",
        whatsAppNumber: "",
        message: "",
      });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <main>
      <Container>
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
            onSubmit={handelSubmit}
              // target="_blank"
              // action={`https://formsubmit.co/intisarsanaillah@gmail.com`}
              // method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-10 mb-10">
                {contuctInputArray.map((i) => (
                  <div key={i.id} className="">
                    <input
                      type={i.type}
                      name={i.name}
                      placeholder={i.placeholder}
                      value={(formData as any)[i.name] || ""}
                      onChange={handleChange}
                      className=" border-b-2 border-colorfullText px-2 pt-1 pb-2 outline-none capitalize w-full"
                    />
                  </div>
                ))}
              </div>
              <textarea
                name="message"
                placeholder="Type Your Messag"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 min-h-[100px] outline-none mb-3 border border-colorfullText"
              ></textarea>
              {/* Hidden Input for Honeypot Spam Protection */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Hidden Input for Redirecting After Submission */}
              <input
                type="hidden"
                name="_next"
                value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/contact/hierme`}
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
                  {i.button == "call" ? (
                    <button
                      onClick={() =>
                        (window.location.href = "tel:+8801796362484")
                      }
                      className="bg-colorfullText py-2 px-3 text-xl inline-block text-lightBackground capitalize rounded-md hover:bg-lightBackground hover:text-darkText duration-300"
                    >
                      {i.button}
                    </button>
                  ) : (
                    <Link
                      href={i.BTNurl}
                      target="_blank"
                      className="bg-colorfullText py-2 px-3 text-xl inline-block text-lightBackground capitalize rounded-md hover:bg-lightBackground hover:text-darkText duration-300"
                    >
                      {i.button}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Box>
        
      </Container>
    </main>
  );
}

export default Contant;
