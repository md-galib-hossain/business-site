import React, { useState, useEffect } from "react";

// import logo
import Logo from "../assets/img/logo.png";
// import icons
import { CgMenuRight, CgClose } from "react-icons/cg";
// import data
import { navigation } from "../data";
// import components
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Header = ({ bgcon }) => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        // if bg is true
        bg || bgcon
          ? "bg-primary py-4 lg:py-6"
          : // if bg is false
            "bg-none"
      }
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to={"/"} href="#">
            <img className="h-6 lg:h-8" src={Logo} alt="" />
          </Link>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-2xl lg:text-3xl text-white cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.name == "home" ? "/" : "/contact"}
                      className="capitalize text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
