import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Home */}
      <Hero />
      <Projects />
      <div className="h-screen w-screen">aa</div>
      <div className="h-screen w-screen">bb</div>
    </div>
  );
};

export default Home;
