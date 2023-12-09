import Image from "next/image";
import Link from "next/link";


const Hero = ({para}) => {
  const Images = {
    randomImg:"https://source.unsplash.com/random/300×1200/?man",
    unslpashImg:"https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    snapchat:"https://i.postimg.cc/D0dMgBwB/Whats-App-Image-2023-12-09-at-20-14-35.jpg"
  }
  return (
    <section className="bg-gray-950">
      <div className="container px-4 py-12 mx-auto md:py-24 lg:py-32">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <Image
              className="w-full mx-auto rounded md:max-w-lg"
              src={Images.snapchat}
              alt="Portrait of Lakshay Kamat"
              width={400}
              height={400}
            />
          </div>
          <div className="mt-8 md:w-1/2 md:ml-12 md:mt-0">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Lakshay Kamat
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-400 md:text-xl">
              {para}
            </p>
            <Link
              href="/projects"
              className="px-4 py-2 text-sm font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full hover:bg-gray-100"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
