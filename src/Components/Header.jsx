import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion"; // 👈 import motion

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="flex justify-between items-center h-20 px-10 sticky top-0 z-50 bg-white shadow-md">
      <h1 className="text-4xl font-bold italic text-purple-700 text-center">
        My Portfolio
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-7 text-2xl">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `hover:underline ${isActive ? "text-purple-700 font-bold" : ""}`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Hamburger Button */}
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} size={24} toggle={setIsOpen} />
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-0 w-1/2 bg-white shadow-lg flex flex-col items-center py-5 gap-5 text-xl lg:hidden"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive ? "text-purple-700 font-bold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)} // close on click
              >
                {item}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
