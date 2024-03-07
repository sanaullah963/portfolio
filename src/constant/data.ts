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
    titel: "full-stack with next.js",
    url: "/services/1",
    detail:'Building a full-stack application with Next.js provides a seamless integration of server-side rendering on the front end, enhancing both performance and search engine optimization. Next.js, a React framework, extends its capabilities to the server-side, enabling developers to create full-stack applications with ease and efficiency. Serverless functions in Next.js empower developers to handle backend logic without the need for a dedicated server, promoting a scalable and cost-effective architecture. With Next.js, the concept of API Routes simplifies the creation of RESTful APIs, allowing for straightforward communication between the front end and backend components of a full-stack application. The automatic code splitting feature in Next.js optimizes page loading times, ensuring a smooth and responsive user experience in full-stack applications. Real-time data updates can be seamlessly integrated into a Next.js full-stack application using technologies like WebSocket, providing dynamic and live interactions for users. Next.js supports the implementation of authentication mechanisms, such as OAuth or JWT, for securing full-stack applications and managing user access. The getServerSideProps and getStaticProps functions in Next.js enable developers to fetch data on the server side, enhancing performance and providing dynamic content for full-stack applications. Next.js offers a flexible routing system that makes it easy to navigate between pages and components, providing a smooth and intuitive user experience in full-stack development. When deploying a full-stack application with Next.js, developers can take advantage of platforms like Vercel or Netlify for seamless integration, automatic scaling, and hassle-free hosting.',
  },
  {
    id: 2,
    icon: FaNodeJs,
    titel: "MERN stack development",
    url: "/services/2",
    detail:'In MERN stack development M = monogBD E = ExpressJs R = React N = NodeJs , MongoDB serves as the NoSQL database, providing a flexible and scalable storage solution for applications.Express.js, a lightweight and robust Node.js framework, plays a crucial role in MERN stack development by simplifying server-side code and handling HTTP requests.React, the front-end library in the MERN stack, enables the creation of dynamic and interactive user interfaces, allowing for a seamless and engaging user experience.Node.js, the server-side runtime environment in MERN, facilitates the execution of JavaScript code outside the browser, making it possible to build scalable and high-performance web applications.Developers often use Mongoose, an elegant MongoDB object modeling tool for Node.js, to simplify interactions with MongoDB databases and define data schemas.RESTful APIs are commonly implemented in MERN stack projects, using Express.js to handle HTTP requests and responses, enabling efficient communication between the client and server.Redux, a state management library, is frequently integrated into the MERN stack for managing the state of React applications and ensuring a predictable and centralized data flow.The MERN stack is modular architecture allows developers to build and deploy applications more efficiently, as each component (MongoDB, Express.js, React, and Node.js) can be developed and scaled independently JSON Web Tokens (JWT) are often employed in MERN stack authentication to securely transmit information between the client and server, ensuring a secure and reliable user authentication process. Continuous integration and deployment (CI/CD) practices are commonly implemented in MERN stack development workflows, using tools like Jenkins or GitLab CI to automate testing, build, and deployment processes',
  },
  {
    id: 3,
    icon: GoCodespaces,
    titel: "frontend with next.js",
    url: "/services/3",
    detail:'Next.js, a powerful React framework, streamlines front-end development by offering a structured and efficient way to build dynamic web applications. With Next.js, developers can leverage server-side rendering to enhance the performance of their front-end applications, ensuring faster page loads and improved SEO. The pages directory structure in Next.js simplifies routing, making it easy for front-end developers to organize and navigate between different views and components. Next.js supports automatic code splitting, allowing for optimized loading of JavaScript bundles and contributing to a more responsive and user-friendly front end. For seamless data fetching, Next.js provides hooks like useEffect and useState that enable front-end developers to fetch and display data with ease, enhancing the user experience. Developers can implement client-side routing in Next.js using the Link component, ensuring smooth transitions between pages and a more intuitive navigation experience for users.The Image component in Next.js simplifies the optimization and lazy loading of images, contributing to improved performance and a better front-end experience. CSS modules and styled-components are commonly used in Next.js for styling, offering a modular and maintainable approach to designing the front end of web applications. Next.js supports headless CMS integrations, allowing front-end developers to easily consume and display content from external sources, enhancing the flexibility of content management. The getStaticProps function in Next.js enables front-end developers to pre-render static pages at build time, optimizing performance and providing a snappy user experience for static content.',
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
    name: "Adobe Photoshop",
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
