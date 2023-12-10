"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";


const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
  const [isOpen, setIsOpen] = useState(false);
  const navbarData = {
    title: "Lakshay Kamat",
    links: [
      {
        id:1,
        path: "/",
        linkName: "Home",
      },
      {
        id:2,
        path: "/projects",
        linkName: "Projects",
      },
      {
        id:3,
        path: "/about",
        linkName: "About"
      },
      {
        id:4,
        path: "http://brogrammerblog.netlify.app",
        linkName: "Blog"
      },
    ],
  };
//focus:bg-gray-500 focus:font-bold focus:text-white
  const allLinks = navbarData.links.map((item)=>{
    return <Link key={item.id} href={item.path} className={`text-gray-300 ${pathname==item.path && "bg-gray-700 font-medium text-white"} hover:bg-gray-800 md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded text-sm`}>{item.linkName}</Link>
  })
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between py-4 md:flex-row">
          <div className="text-xl font-bold text-white">{navbarData.title}</div>
          <div className="absolute flex md:hidden right-5 top-4">
            <button
              type="button"
              className="p-1 text-gray-500 bg-gray-700 rounded hover:text-white focus:outline-none focus:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:flex md:flex-row md:items-center ${
              isOpen ? "w-full flex flex-col" : "w-fit hidden"
            }`}
          >
            {allLinks}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
