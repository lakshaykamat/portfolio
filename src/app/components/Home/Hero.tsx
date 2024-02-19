import Image from "next/image";
import Link from "next/link";
import RESUME_PUB from "../../../data/resume";
import { Images } from "../../../data";
const Hero = ({ para, para2 }) => {
  return (
    <div className="container py-12 mx-auto md:py-24 lg:py-32">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2">
          <Image
            className="w-full mx-auto rounded brightness-90 saturate-100 md:max-w-lg"
            src={`/profile_pic.jpg`}
            alt="Portrait of Lakshay Kamat"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-8 md:w-1/2 md:ml-12 md:mt-0">
          <h1 className="mb-4 text-4xl font-bold text-zinc-200 md:text-5xl lg:text-6xl">
            Lakshay Kamat
          </h1>
          <p className="mb-3 text-lg leading-relaxed text-zinc-300 md:text-xl">
            {para}
          </p>
          <p className="mb-6 text-base text-zinc-300">{para2}</p>
          <div className="flex gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 text-sm font-bold tracking-wide uppercase bg-indigo-500 rounded-full text-zinc-200 hover:text-gray-00 outline-gray-400 hover:outline-offset-2 outline-2 hover:outline"
            >
              View Projects
            </Link>
            <Link
              href={RESUME_PUB}
              target="_blank"
              className="px-4 py-2 text-sm font-bold tracking-wide uppercase bg-white rounded-full text-zinc-900 outline-gray-400 hover:outline-offset-2 outline-2 hover:outline"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
