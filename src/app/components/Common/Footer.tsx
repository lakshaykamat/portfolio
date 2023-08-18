import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { socialMediaLinks } from "../../../data";
const Item = ({ link, text, jsx }) => {
  return (
    <li className="m-2 text-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <div className="flex items-center justify-center gap-2">
          {jsx}
          <h5>{text}</h5>
        </div>
      </a>
    </li>
  );
};
const data = [
  {
    link: `mailto:${socialMediaLinks.mail}`,
    text: "Email",
    jsx: <FaEnvelope />,
  },
  {
    link: `tel:${socialMediaLinks.tel}`,
    text: "Phone",
    jsx: <FaPhoneAlt />,
  },
  {
    link: socialMediaLinks.github,
    text: "Github",
    jsx: <FiGithub />,
  },
  {
    link: socialMediaLinks.linkedIn,
    text: "LinkedIn",
    jsx: <FiLinkedin />,
  },
  {
    link: socialMediaLinks.twitter,
    text: "Twitter",
    jsx: <FiTwitter />,
  },
];
const Footer = () => {
  return (
    <footer className="px-3 py-5 text-gray-300 bg-gray-900">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="flex items-center">
          <h3 className="mb-4 text-2xl font-bold md:m-0">Lakshay Kamat</h3>
        </div>
        <div className="flex items-center">
          <ul className="flex flex-wrap justify-center space-x-7">
            {data.map((item,index) => {
              return <Item key={index} link={item.link} text={item.text} jsx={item.jsx} />;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
