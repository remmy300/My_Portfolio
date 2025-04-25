import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-20 gap-7 px-10 sticky top-0 z-50 bg-white shadow-md">
      <h1 className="text-4xl font-bold italic text-purple-700 text-center">
        My Portfolio
      </h1>
      <nav>
        <ul className="flex gap-7 text-2xl">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive ? "text-purple-700 font-bold" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
