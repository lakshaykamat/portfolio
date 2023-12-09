import Hero from "./components/Home/Hero";
import ResumeCV from "./components/Home/ResumeCV";
import Testimonials from "./components/Home/Testimonial";

import { testimonials } from "../data";
import ToolsSection from "./components/Home/ToolsSection";

export default function Home() {
  const para = {
    Hero: "Programmer with a passion",
    resume:
      "Experienced web developer proficient in React and Node.js, with expertise in backend development, skilled in programming concepts, data structures, OOP, and SQL and NOSQL",
  };
  return (
    <>
      <Hero para={para.Hero} />
      <Testimonials testimonials={testimonials} />
      <ResumeCV para={para.resume} />
      <ToolsSection/>
      {/* <Certificates awards={awards} /> */}
    </>
  );
}
