// components/ToolsSection.js
import React from 'react';
import Image from 'next/image';

const ToolsSection = () => {

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
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl px-4 mx-auto outline">
        <h2 className="mb-4 text-3xl font-semibold">Tools and Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">

            {
                images.map((img,index)=>{
                    return <div key={index} className="flex flex-col items-center w-1/2 justfy-center md:w-1/4">
                    <div className="flex items-center justify-center flex-grow mb-2">
                      <Image
                        src={img.src}
                        alt={img.label}
                        width={100}
                        height={100}
                        className=''
                      />
                    </div>
                    <p>{img.label}</p>
                  </div>
                })
            }
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
