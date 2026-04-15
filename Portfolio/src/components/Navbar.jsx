import React, { useEffect, useState } from "react";
import logo from "../assests/logo1.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show/hide navbar
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      // background + blur logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >
      {/* Left Logo */}
      <div className="absolute left-0 top-0 w-60 flex items-center px-6 py-4">
        <img src={logo} alt="logo" className="h-10 w-14" />
        <div className="text-2xl font-bold text-white hidden sm:block">
          Atul
        </div>
      </div>

      {/* Center Links */}
      <div className="flex justify-center items-center py-4 text-white">
        <a href="#home" className="px-4 font-bold text-2xl hover:text-gray-300">
          Home
        </a>
        <a href="#skills" className="px-4 font-bold text-2xl hover:text-gray-300">
          Skills
        </a>
        <a href="#project" className="px-4 font-bold text-2xl hover:text-gray-300">
          Projects
        </a>
        <a href="#contact" className="px-4 font-bold text-2xl hover:text-gray-300">
          Contact
        </a>
      </div>
    </motion.div>
  );
}