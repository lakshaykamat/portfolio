import Hero from "./components/Home/Hero";
import Testimonials from "./components/Home/Testimonial";

import { testimonials } from "../data";
import ToolsSection from "./components/Home/ToolsSection";

export default function Home() {
  const para = {
    Hero: "Programmer with a passion",
    resume:
      "Experienced web developer proficient in React and Node.js, with expertise in backend development, skilled in programming concepts, Java, data structures, OOP, and Databases",
  };
  return (
    <div className="px-2 bg-slate-900">
      <Hero para={para.Hero} para2={para.resume} />
      <Testimonials testimonials={testimonials} />
      {/* <ResumeCV para={para.resume} /> */}
      <ToolsSection />
      {/* <Certificates awards={awards} /> */}
    </div>
  );
}
