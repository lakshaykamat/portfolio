import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { socialMediaLinks } from "../../../utils/socialMediaLinks";

const Footer = () => {
  return (
    <footer className="px-3 py-5 text-gray-300 bg-gray-900">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="flex items-center">
          <h3 className="mb-4 text-2xl font-bold md:m-0">Lakshay Kamat</h3>
        </div>
        <div className="flex items-center">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li className="m-2 text-center">
              <a
                href={`mailto:${socialMediaLinks.mail}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaEnvelope className="inline-block mr-1" />
                Email
              </a>
            </li>
            <li className="m-2 text-center">
              <a
                href={`tel:${socialMediaLinks.tel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaPhoneAlt className="inline-block mr-1" />
                Phone
              </a>
            </li>
            <li className="m-2 text-center">
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FiGithub className="inline-block mr-1" />
                Github
              </a>
            </li>
            <li className="m-2 text-center">
              <a
                href={socialMediaLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FiLinkedin className="inline-block mr-1" />
                LinkedIn
              </a>
            </li>
            <li className="m-2 text-center">
              <a
                href={socialMediaLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FiTwitter className="inline-block mr-1" />
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;