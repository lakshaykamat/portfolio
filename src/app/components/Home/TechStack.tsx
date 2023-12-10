// import { Slider }from 'slick-carousel';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

const TechStack = () => {
  const images = [
    {
      src: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      label: "ReactJS",
    },
    {
      src: "/next.svg",
      label: "NextJS",
    },
    {
      src: "/git.png",
      label: "Git",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      label: "NodeJS",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      label: "ExpressJS",
      width: 465,
      height: 141,
    },
    {
      src: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
      label: "TypeScript",
    },
    {
      src: "/mongo.png",
      label: "MongoDB",
    },
    {
      src: "/linux.png",
      label: "Linux",
      width:150,
      height:100,
    },
    {
      src: "/tailwind.png",
      label: "Tailwind CSS",
      width:280,
      height:280,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
      label: "GraphQL",
      width:200,
      height:250,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
      label: "Figma",
      width:200,
      height:250,
    },
  ];
  return (
    <div className="py-16 bg-black">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="mb-4 text-3xl font-semibold">Tools and Technologies</h1>
        {/* <div className="flex gap-10">
          {
            images.map((img,i) => {
              return (
              <div key={i} className="flex flex-col flex-wrap gap-3 i">

              <Image src={img.src} alt={img.label} className="w-full" height={img.width ? img.width : 150} 
              width={img.width ? img.width : 150} />
              <p className="w-full">{img.label}</p>
              </div>
              )
            })
          }
        </div> */}

        <div className="flex flex-wrap justify-center gap-10">
          {images.map((img, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={img.src}
                alt={img.label}
                className="flex-grow w-full"
                height={img.width ? img.width : 100}
                width={img.width ? img.width : 100}
              />
              <p className="w-full mt-2 text-center">{img.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
