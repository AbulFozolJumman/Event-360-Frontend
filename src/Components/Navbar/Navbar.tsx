import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        id="nav"
        className="flex items-center justify-between max-w-[1280px] h-24 mb-8 md:mb-16 mx-auto px-5"
      >
        <h2 className="text-[32px] font-extrabold">
          Event
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE8900] to-[#5A01CB] pl-2">
            360
          </span>
        </h2>
        <div onClick={() => setOpen(!open)} className="hidden">
          <span>
            {open === true ? <AiOutlineMenuFold /> : <AiOutlineMenu />}
          </span>
        </div>

        <div className={`nav-links ${open ? "top " : "top-m"}`}>
          <div>
            <Link className="font-medium" to="/">
              Home
            </Link>
            <a className="font-medium" href="#about">
              About
            </a>
            <a className="font-medium" href="#services">
              Services
            </a>
            <NavLink className="font-medium" to="/dashboard">
              Dashboard
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
