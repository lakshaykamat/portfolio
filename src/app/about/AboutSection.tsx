import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

export default function AboutSection({
  degree,
  para,
  image,
  achievements}) {
  return (
    <div>
      <div className="bg-slate-900">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-lg text-gray-400">{para}</p>
              <div className="flex mt-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-300">Education</h3>
                  <p className="mt-2 text-base text-gray-400">
                    {degree}
                  </p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                    <GiTrophyCup className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-300">
                    Achievements
                  </h3>
                  <ul className="mt-2 text-base text-gray-400 list-disc list-inside">
                    {achievements.slice(0,1).map((item: string ) =><li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image
              alt="about"
                src={image}
                width={500}
                height={500}
                className="m-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
