"use client";
import { useState } from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      className="container relative w-full font-sans bg-black text-white flex items-center justify-between mx-auto px-7 lg:px-72 py-5 "
    >
      <div className="brandmenu inline-flex items-center gap-12 ">
        <a href="#home" className="font-semibold text-xl lg:text-2xl">
          <img src={logo} alt="logo" className="w-8 h-8" />
        </a>
        <ul className="lg:inline-flex items-center gap-5 hidden">
          <li className="font-base text-xs ">
            <a href="#distribution">Distribution</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#promotion">Promotion</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#feature">Feature</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#">Earning</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#">Blog</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div
        id="humbergerButton"
        className="humberger cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        <i className="ri-menu-4-fill ri-lg"></i>
      </div>
      <div className="action language lg:flex hidden justify-center gap-5 items-center">
        <a className="text-xs font-medium">EN</a>
        <a href="https://firmansyah-dev.tech/admin/login" className="text-xs ">
          Log in
        </a>
        <a
          href="https://firmansyah-dev.tech/admin/register"
          className="text-xs  bg-white text-black py-2 px-4 rounded-full"
        >
          Sign up
        </a>
      </div>
      <div
        id="mobileNav"
        className={`mobile-nav absolute top-16 text-black bg-white rounded-lg p-4 z-50 right-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="inline-flex flex-col items-start gap-5">
          <li className="font-base text-xs ">
            <a href="#distribution">Distribution</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#promotion">Promotion</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#">Analytics</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#">Earning</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#">Blog</a>
          </li>
          <li className="font-base text-xs ">
            <a href="#">Help</a>
          </li>
          <li className="flex items-center justify-between gap-4">
            <a
              href="https://firmansyah-dev.tech/admin/login"
              className="text-xs "
            >
              Log in
            </a>
            <a
              href="https://firmansyah-dev.tech/admin/register"
              className="text-xs text-black"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
