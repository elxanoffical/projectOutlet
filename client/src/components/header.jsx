import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Header = () => {

  const {i18n} = useTranslation()
  return (
    <div className=" py-8 px-4 container mx-auto flex justify-between items-center">
      <h1 className="font-extrabold text-4xl tracking-wide text-indigo-500">
        Logo
      </h1>
      <nav className="flex items-center gap-8">
        {navLinks[i18n.language].map((item, index) => {
          return(
          <NavLink
            className="font-medium text-gray-300 text-xl tracking-wide  border-b duration-200 py-1 border-b-transparent transition-all hover:border-indigo-500 "
            to={item.path}
            key={index}
          >
            {item.title}
          </NavLink>
          )
        })}
      </nav>
      <button className="py-2 px-6 rounded-lg bg-indigo-500">Login</button>
    </div>
  );
};

export default Header;
