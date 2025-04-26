import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-10 px-8">
      <div className="grid md:grid-cols-3 mx-auto max-w-3xl gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold mb-2">Jentah Rehema</h3>
          <p className="text-2xl font-semibold italic">
            Crafting clean and creative UIs
          </p>
        </div>

        <div>
          <h4 className="text-2xl mb-2">Quick Links</h4>
          <ul>
            <li className="text-2xl">
              <HashLink to="/about">About</HashLink>
            </li>
            <li className="text-2xl">
              <HashLink to="/contact">Contact</HashLink>
            </li>
            <li className="text-2xl">
              <HashLink to="projects">Projects</HashLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="m-3 font-bold">Connect</h3>
          <div className="flex justify-center md:justify-start text-2xl gap-4">
            <a href="https://github.com/remmy300" target="_blank">
              <FaGithub className="size-10 " />
            </a>
            <a href="https://linkedin.com/in/jentah-rehema">
              <FaLinkedin className="size-10" />
            </a>
            <a href="mailto:jentahrehema7@gmail.com">
              <MdEmail className="size-10" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-md text-gray-200">
        @ {new Date().getFullYear()} Jentah Rehema . All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
