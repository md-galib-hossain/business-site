import React from "react";
import { Link } from "react-router-dom";

// import logo
import Logo from "../assets/img/logo.png";

// import data
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14">
          <a className="mb-6 lg:mb-0" href="#">
            <img className="w-40" src={Logo} alt="" />
          </a>
          <div className="flex gap-x-4">
            {footer.social.map((item, index) => {
              return (
                <div
                  className="w-12 h-12 text-2xl bg-gray-700 hover:bg-blue-700 rounded-full flex justify-center items-center transition-all"
                  key={index}
                >
                  <Link to="/">{item.icon}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center">
          &copy; Real Estate 2023 - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
