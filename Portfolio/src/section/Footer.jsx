import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

const socials = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atul-patel-34a699297/",
  },
  {
    Icon: FaGithub,
    label: "Github",
    href: "https://github.com/atulp0008",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-semibold leading-none text-white text-center select-none 
        text-[clamp(3rem,2vw,14rem)] tracking-wide whitespace-nowrap px-[3vw]"
        style={{
          textShadow: "0 2px 18px rgba(0,0,0,0.45)",
          lineHeight: 0.9,
        }}
        >
          ATUL PATEL
        </h1>

        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147]" />

        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-300 italic max-w-xl">"Success is when preparation meets opportunity."</p>
        <p className="text-xs text-gray-400"> &copy; {new Date().getFullYear()} Atul Patel. All Rights reserved. </p>
      </motion.div>
    </footer>
  );
}