import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <>
      <motion.section
        id="hero"
        className=" h-screen mx-auto bg-gradient-to-r from-purple-400 to-blue-500 py-16 px-8 flex sm:flex-col-reverse gap-20  lg:flex-row   justify-evenly items-center  text-white"
        initial="hidden"
        animate="visible"
      >
        {/* Animated Introduction */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-extrabold mb-6"
          >
            Hi, I'm <span className=" text-amber-400">Jentah Rehema</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-4xl mb-8"
          >
            Frontend Developer | React Enthusiast
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div className="flex gap-6">
            <HashLink
              to="/#projects"
              smooth
              className="text-2xl rounded-lg py-2 px-6 bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-transform hover:scale-110"
            >
              View My Work
            </HashLink>

            <HashLink
              to="/#contact"
              smooth
              className="border-2 text-2xl border-white rounded-lg px-6 py-2 text-white hover:bg-white hover:text-purple-600 transition-transform hover:scale-110"
            >
              Contact Me
            </HashLink>
          </motion.div>
          {/* Fun Tagline */}
          <motion.p className="mt-10 text-xl italic opacity-80">
            "Turning ideas into reality—one line of code at a time."
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          {/* Profile Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
            }}
            transition={{ duration: 0.6, ease: "easeInOut", type: "spring" }}
            className="flex justify-center items-center"
          >
            <img
              src={profile}
              alt="Jentah Rehema"
              className="h-60 w-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full mb-8 border-4 border-white shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
