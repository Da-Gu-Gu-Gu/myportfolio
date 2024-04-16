import { Suspense } from "react";
import Loading from "./loading";
import Hero from "./components/Home/Hero";
import Contact from "./components/Home/Contact";
import Skill from "./components/Home/Skill";
import Projects from "./components/Home/Projects";
import Exp from "./components/Home/Exp/Exp";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative  z-30">
        <Hero />
        <Projects />
        <Skill />
        <Exp />
      </div>
      <div id="contact" className="h-screen w-screen relative -z-20"></div>
      <Contact />
    </div>
  );
};

export default Home;
