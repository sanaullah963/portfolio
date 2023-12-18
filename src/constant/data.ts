// navigation item
export const navitem = [
  { titel: "Home", url: "/" },
  { titel: "services", url: "/services" },
  { titel: "protfolio", url: "/protfolio" },
  { titel: "resume", url: "/resume.pdf", target: "_blank" },
  { titel: "contact", url: "/contact" },
];

// servises array
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { GoCodespaces } from "react-icons/go";
export const services = [
  {
    id: 1,
    icon: TbBrandNextjs,
    titel: "MERN stack development",
    url: "/services/1",
  },
  {
    id: 2,
    icon: FaNodeJs,
    titel: "MERN stack development",
    url: "/services/2",
  },
  {
    id: 3,
    icon: GoCodespaces,
    titel: "frontend with next.js",
    url: "/services/3",
  },
];

// protfolio image
import { image1, image2, image3, image4, image5 } from "@/img/image";
export const protfolioImageArr = [
  {
    link: "https://protfolio-xi-gold.vercel.app/",
    titel: "countre app",
    language: "NextJs | tailwind css",
    img: image1,
  },
  {
    link: "https://remarkable-fudge-61b699.netlify.app/",
    titel: "E-commerce website",
    language: " HTML | CSS ",
    img: image2,
  },
  {
    link: "https://6536662fe7753e06dd064713--velvety-tarsier-53373b.netlify.app/",
    titel: "Hotel Management website",
    language: "HTML | CSS | Bootstrap",
    img: image4,
  },
  {
    link: "https://lively-melba-663af2.netlify.app/",
    titel: "Fashion Blog",
    language: "HTML | CSS",
    img: image5,
  },
  {
    link: "https://hotelier-lac.vercel.app/",
    titel: "Hotel management Website",
    language: "HTML | CSS | Bootstrap",
    img: image3,
  },
  // {
  //   link: "https://6536659fd40f0f09bfd38d1a--famous-puppy-ceac9c.netlify.app/",
  //   titel: "Hotel management Website",
  //   language: "React | Express | MongoDB | NodeJs",
  //   img: image3,
  // },
];

// footer social media icon
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
export const footerSocialMedia = [
  {
    icon: FaFacebookF,
    iconName: "facebook",
    username: "intisarsanaullah",
    target: "_blank",
    url: "https://www.facebook.com/intisarsanaullah",
  },
  {
    icon: AiFillInstagram,
    iconName: "instagram",
    username: "intisarsanaullah",
    target: "_blank",
    url: "https://www.facebook.com/intisarsanaullah",
  },
  {
    icon: AiOutlineTwitter,
    iconName: "twitter",
    username: "intisarsanaullah",
    target: "_blank",
    url: "https://www.facebook.com/intisarsanaullah",
  },
  {
    icon: BiLogoLinkedin,
    iconName: "linkdine",
    username: "intisar-sanaullah",
    target: "_blank",
    url: "https://www.linkedin.com/in/intisar-sanaullah/",
  },
];

// sakills headding section array
export const skillHeaddingArray = [
  {
    name: "HTML 5",
    masseg:
      "HTML is the standard markup language for creating web pages and web applications.",
  },
  {
    name: "CSS 3",
    masseg:
      "CSS is used for styling HTML documents, allowing developers to control the layout, appearance, and formatting of web pages.",
  },
  {
    name: "bootstrap",
    masseg:
      "Bootstrap is a popular front-end framework that simplifies web development by providing pre-designed, responsive components and styles, ",
  },
  {
    name: "tailwind",
    masseg:
      "Tailwind CSS is a utility-first CSS framework that enables developers to build custom designs by composing utility classes, offering flexibility and efficiency in styling web applications.",
  },
  {
    name: "react",
    masseg:
      "React is a JavaScript library for building user interfaces, particularly for single-page applications where components manage their state and efficiently update the user interface.",
  },
  {
    name: "nextJs",
    masseg:
      "Next.js is a React framework that simplifies the process of building server-side rendered and statically generated web applications, enhancing performance and developer experience.",
  },
  {
    name: "javaScript",
    masseg:
      "JavaScript is a versatile programming language used for client-side scripting in web development.",
  },
  {
    name: "Node Js",
    masseg:
      "Node.js is a server-side JavaScript runtime that allows developers to build scalable network applications. It is commonly used to create web servers and handle asynchronous I/O,",
  },

  // {
  //   name: "authJs",
  //   masseg:
  //     "Auth0 is an identity management platform that provides authentication and authorization services for developers, making it easier to implement secure user authentication in web applications.",
  // },
  {
    name: "Express js",
    masseg:
      "Express.js is a web application framework for Node.js that simplifies the process of building robust and scalable web applications by providing a set of features for web and mobile applications",
  },
  {
    name: "mongoDB",
    masseg:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is known for its scalability, flexibility, and ease of integration with web applications, particularly those built on Node.js.",
  },
];
// my outher skill section
export const skillArray = [
  { url: "https://www.typescriptlang.org/", name: "Typescript" },
  { url: "https://redux-toolkit.js.org/", name: "Redux Toolkit" },
  { url: "https://next-auth.js.org", name: "authJs" },
  // { url: "https://firebase.google.com/", name: "Google Firebase" },
  // { url: "https://www.sanity.io/", name: "Sanity.io" },
  { url: "https://sass-lang.com/", name: "SASS" },
  { url: "https://code.visualstudio.com/", name: "VS Code" },
  // { url: "https://github.blog/2022-06-08-sunsetting-atom/", name: "atom" },
  { url: "https://git-scm.com/", name: "git" },
  { url: "https://github.com/", name: "Github" },
  // { url: "https://trello.com/en", name: "Trello" },
  // { url: "https://www.gitkraken.com/", name: "GitKrake" },
  // { url: "https://www.behance.net/", name: "UI desgine" },
  { url: "https://www.figma.com/login", name: "figma" },
  { url: "https://www.canva.com/", name: "canva" },
  {
    url: "https://www.adobe.com/products/illustrator/free-trial-download.html",
    name: "Adobe Illustrator",
  },
  // { url: "https://dribbble.com/", name: "Brand & Logo Designscript" },
  // { url: "https://themeforest.net/", name: "web site desgine" },
  { url: "https://vercel.com/dashboard", name: "Vercel" },
  { url: "https://www.netlify.com/", name: "netlify" },
];

// experiance array
export const experianceArr = [
  {
    id: 1,
    titel: "People N Teach",
    descripetion: "Internship on MERN stack development 2023 August-November",
  },
  // { id: 5, titel: "Fiverr", descripetion: "MERN Stack Developer 2019 - 2020" },
];

// contact input array
export const contuctInputArray = [
  { id: 1, type: "text", placeholder: "enter your name" },
  { id: 2, type: "email", placeholder: "your email address" },
  { id: 3, type: "number", placeholder: "whatapp number" },
  { id: 4, type: "number", placeholder: "contact number" },
];
// contact box array
import { FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
// linkedin icon import top this page
export const contactBoxArray = [
  {
    icon: MdOutlineContactPage,
    headding: "my rusume",
    // address: "intisarsanaullah963@gmail",
    button: "see resume",
    BTNurl: "/resume.pdf",
  },
  {
    icon: FiMail,
    headding: "email address",
    address: "intisarsanaullah963@gmail",
    button: "send mail",
    BTNurl: "mailto:islamjihad612@g",
  },
  {
    icon: IoLogoWhatsapp,
    headding: "whatsapp",
    address: "+880 17963-62484",
    button: "send message",
    BTNurl: "http://wa.me/qr/FVDTKR24QTKBC1",
  },
  {
    icon: BiSolidPhoneCall,
    headding: "phone number",
    address: "+880 17963-62484",
    button: "call",
    BTNurl: "",
  },
  {
    icon: BiLogoLinkedin,
    headding: "linkedin profile",
    address: "@intisar-sanaullah",
    button: "visit",
    BTNurl: "https://www.linkedin.com/in/intisar-sanaullah/",
  },
];
