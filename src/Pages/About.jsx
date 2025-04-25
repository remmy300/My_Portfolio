import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    level: 90,
    color: "bg-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    level: 85,
    color: "bg-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: <FaCss3Alt className="text-teal-500" />,
    level: 80,
    color: "bg-teal-400",
  },
  { name: "REST APIs & Axios", icon: "🔗", level: 75, color: "bg-indigo-400" },
];

const About = () => {
  return (
    <section
      id="about"
      className=" bg-gradient-to-b from-purple-100
      to-gray-100 text-gray-800 py-16 px-8 scroll-smooth"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-5xl font-bold mb-8 text-purple-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I&apos;m{" "}
          <span className="font-semibold hover:text-purple-600 transition-transform hover:scale-110">
            Jentah Rehema
          </span>
          , a passionate
          <span className="font-semibold"> Frontend Developer</span> who builds
          responsive, modern web apps using
          <span className="font-semibold"> React</span> and
          <span className="font-semibold"> Tailwind CSS</span>.
        </motion.p>

        <motion.p
          className="text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I love turning ideas into clean, functional interfaces. I&apos;ve
          worked on blogs, games, and e-commerce apps, and I&apos;m constantly
          exploring new tech to level up my frontend game.
        </motion.p>

        {/* Skill Cards */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mt-8 mb-4">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <h4 className="text-lg font-semibold">{name}</h4>
              </div>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="mt-10 space-y-6 text-left">
            {skills.map(({ name, level, color }, idx) => (
              <div key={name}>
                <p className="font-medium mb-1">{name}</p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{
                    delay: 1 + idx * 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className={`h-3 rounded-lg ${color}`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.p
          className="text-lg mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          When I&apos;m not coding, I love exploring new tools, writing about
          dev life, and enjoying a good cup of coffee ☕.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <p className="text-xl">
            Let&apos;s collaborate! Check out my work or get in touch.
          </p>

          <div className="flex justify-center gap-8 text-4xl">
            <a
              href="https://github.com/remmy300"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/jentahrehema"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
