import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/resume.png";
import recipe from "../assets/recipe.png";
import movie from "../assets/movie.png";

const projects = [
  {
    title: "Recipe App",
    img: recipe,
    description: "Search and explore tasty recipes with ingredients filters",
    tech: "React,API,Tailwind",
    github: "https://github.com/remmy300/Recipe-App",
    demo: "https://recipe-app-black-two.vercel.app/",
  },
  {
    title: "Resume App",
    img: resume,
    description: "Build a professional resume with form inputs",
    tech: "React,Tailwind",
    github: "https://github.com/remmy300/Resume-App",
    demo: "https://resume-app-xi-silk.vercel.app/",
  },
  {
    title: "Movie App",
    img: movie,
    description: "Browse and serche for movies from an external API",
    tech: "React,Axios,Tailwind",
    github: "https://github.com/remmy300/Movie-App",
    demo: "https://movie-app-two-eta-90.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div>
      <section id="projects" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-purple-700 mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <p className="text-sm text-purple-600 font-semibold mb-3">
                    {project.tech}
                  </p>
                  <div className="flex justify-between gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 font-semibold hover:underline"
                    >
                      View Code →
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
