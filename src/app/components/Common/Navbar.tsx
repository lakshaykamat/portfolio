"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navbarData = {
    title: "Lakshay Kamat",
    links: [
      {
        id: 1,
        path: "/",
        linkName: "Home",
      },
      {
        id: 2,
        path: "/projects",
        linkName: "Projects",
      },
      {
        id: 3,
        path: "/about",
        linkName: "About",
      },
      {
        id: 4,
        path: "/blog",
        linkName: "Blogs",
      },
    ],
  };
  const allLinks = navbarData.links.map((item) => {
    return (
      <Link
        key={item.id}
        href={item.path}
        className={`text-gray-300 ${
          pathname == item.path && "bg-gray-700 font-medium text-white"
        } hover:bg-gray-700 md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded`}
      >
        {item.linkName}
      </Link>
    );
  });
  return (
    <nav className="border-b border-slate-700 bg-slate-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between py-4 md:flex-row">
          <div className="text-xl font-bold text-white">{navbarData.title}</div>
          <div className="absolute flex md:hidden right-5 top-4">
            <button
              type="button"
              className="p-1 text-white bg-gray-700 rounded focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
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
