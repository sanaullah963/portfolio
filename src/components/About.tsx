import React from "react";
import Container from "./Container";
import Box from "./Box";
import BoxHeadding from "./BoxHeadding";


function About() {
  return (
    <main className="">
      <Container className=" ">
        <Box className=" bg-lightBackground">
          <BoxHeadding headding="about me" />
          <p className="mb-4 text-lg">
            I&apos;m a experienced MERN stack developer. I specialize in building user-friendly
            frontend using React and various React framework  next js, while also
            developing robust backend with Node.js. Leveraging the power of
            React and its ecosystem, I&apos;ve successfully designed and implemented
            intuitive frontends that prioritize user satisfaction and
            interaction. On the backend, I excel in creating a solid foundation
            using Node.js. MongoDB and Express.js are my go-to tools for
            efficient data storage and server-side application development. Also
            proficient in using Next.js to manage frontend and backend together
          </p>
          <p className=" text-lg">
            I&apos;m always looking to improve my skills and stay up-to-date with
            the latest best practices in web development. I am excited to
            continue growing as a developer and making meaningful contributions
            to projects and teams.
          </p>
        </Box>
      </Container>
    </main>
  );
}

export default About;
