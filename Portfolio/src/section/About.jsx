
import { motion } from "framer-motion";
import React from "react";
import p from "../assests/boy.jpg";

export default function About() {
  const glow = [
    "top-0 left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        {glow.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* ✅ Main Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        
        {/* 🔹 Top Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 lg:mt-20"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* 🖼 Profile Image */}
          <motion.div
            className="relative w-40 h-40 md:w-[200px] md:h-[200px] 
            rounded-2xl overflow-hidden shadow-2xl 
            bg-gradient-to-r from-[#8e5cf1]/20 to-[#5b2ca0]/20 
            border border-[#1f1147]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img
              src={p}
              alt="Atul Patel profile"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* 📝 Text Content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8e5cf1] via-[#5b2ca0] to-[#8e5cf1]">
              Atul Patel
            </h2>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              MERN Stack Developer
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build scalable, modern applications with a strong focus on clean
              architecture, delightful UX, and performance. My toolkit includes
              JavaScript, React, Next.js, Tailwind CSS, and RESTful APIs —
              bringing ideas to life from concept to production with robust
              backends and smooth user interfaces.
            </p>

            {/* 🔘 Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="#project"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
                aria-label="View my projects"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
                aria-label="Contact me"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* 🔹 About Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I'm a software and web developer passionate about building fast,
            scalable, and resilient applications.
          </p>

          <p className="text-gray-400 text-base mt-4 sm:text-lg">
            I enjoy turning ideas into user-friendly, impactful products with
            modern technologies and clean design principles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

