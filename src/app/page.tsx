import Certificates from "./components/Home/Certificates";
import Hero from "./components/Home/Hero";
import ResumeCV from "./components/Home/ResumeCV";
import Testimonials from "./components/Home/Testimonial";

import { testimonials } from "../data";
import { awards } from "../data";

export default function Home() {
  const para = {
    Hero: "I'm a web developer with a passion for creating beautiful and functional websites. I specialize in front-end development and have experience with a variety of technologies including HTML, CSS, JavaScript, and React.",
    resume:
      "Hello, my name is Lakshay Kamat, and I am a web developer with three years of experience in the field. I have worked with many different languages, including React, Node.js, Django, and Angular. Additionally, I have experience working as a backend developer. I have a strong understanding of programming concepts, including data structures and algorithms, object-oriented programming, and SQL.",
  };
  return (
    <>
      <Hero para={para.Hero} />
      <Testimonials testimonials={testimonials} />
      <ResumeCV para={para.resume} />
      <Certificates awards={awards} />
    </>
  );
}
