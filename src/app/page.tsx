import About from "@/components/About";
import BactToTop from "@/components/BactToTop";
import Banner from "@/components/Banner";
import Contant from "@/components/Contact";
import Experience from "@/components/Experience";
import Protfolio from "@/components/Protfolio";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Banner />
        <About />
        <Skill />
        <Services />
        <Experience />
        <Protfolio />
        <Contant />
      </Suspense>
    </main>
  );
}
