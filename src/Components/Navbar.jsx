import React from "react";
import { useState } from "react";
import { navLinks } from "../Constants/Stuff";
// import SClogo from "../assets/SClogo.png";
import { SClogo, menu, close } from "../Constants/Images";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleNavigation = (link) => {
    // Implement your navigation logic here
    console.log(`Navigating to ${link}`);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img
          src={SClogo}
          alt="SClogo"
          className="w-[200px] h-[150px] cursor-pointer"
        />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black`}
          >
            <Link to={nav.Link}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-rose-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-black`}
              >
                <Link to={nav.Link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
