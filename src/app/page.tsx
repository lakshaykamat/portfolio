import Hero from "./components/Home/Hero";
import { projects, Description } from "../data";
import Projects from "./components/Home/Projects";
import Image from "next/image";

export default function Home() {

  return (
    <div className="px-6">
      <Hero para={Description.Heading} para2={Description.caption} />
      <Projects projects={projects} />
      <div className="pb-10 mx-auto lg:px-24">
        <div className="mb-20">
          <h2>My Journey</h2>
          <div className="flex flex-col justify-between gap-6 min-[725px]:flex-row">
            <div className="max-w-xl">
              <p className="text-lg">I started programming in high school with my first programming language, C.</p>
              <p className="text-lg">I enjoyed it so much that I continued learning, and now I have knowledge in various areas. Java is my primary language, and I can also create beautiful websites using the MERN Stack. Additionally, I&apos;m proficient in using Git and GitHub.</p>
            </div>
            <Image
            alt="Programming Lakshay"
              className="max-w-full rounded min-[725px]:w-1/3 brightness-75"
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="mb-20">
          <h2>My College</h2>
          <div className="flex flex-col justify-between gap-6 min-[725px]:flex-row-reverse">
          <div className="max-w-xl">
              <p className="text-lg">I&apos;m Doing BCA (Data Science) in <b>Echelon insitute of technology in faridabad.</b></p>
              <p className="text-lg">I learned a lot alongside my peers. We collaborated on numerous projects as teams, fostering a highly conducive environment for growth. The college provided ample opportunities to engage in diverse projects, contributing to our learning and development.</p>
            </div>
            <Image
            alt="Echelon insitute of technology"
              className="rounded max-w-full min-[725px]:w-1/3 brightness-75"
              src="https://eitfaridabad.com/wp-content/uploads/2023/01/campus1.webp"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
