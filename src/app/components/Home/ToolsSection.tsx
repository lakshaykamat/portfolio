import React from 'react';
import Image from 'next/image';
import { ToolsAndTech } from '../../../data';

const ToolsSection = () => {


  return (
    // <section className="py-16 bg-black">
      <div className="max-w-4xl py-10 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold text-gray-200">Tools and Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">

            {
                ToolsAndTech.map((img,index)=>{
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
    // </section>
  );
};

export default ToolsSection;
