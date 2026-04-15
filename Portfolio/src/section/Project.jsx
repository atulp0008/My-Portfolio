import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import project1 from "../assests/project1.png";
import project2 from "../assests/project2.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Dynamic Data Manager",
      desc: "A MERN app that lets users to create, read, update, and delete data using MongoDB, Express, React, and Node.js.",
      background:
        "bg-[radial-gradient(circle_at_center,_#0F3D36_0%,_#0A2F2A_40%,_#061E1B_100%)]",
      image: project1,
    },
    {
      id: 2,
      title: "Weather App",
      desc: "A dynamic weather app shows real-time weather based on location.",
      background:
        "bg-[radial-gradient(circle_at_center,_#4FC3F7_0%,_#2196F3_40%,_#0D47A1_100%)]",
      image: project2,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div id="project"
      className={`w-full h-[100vh] flex items-center justify-center text-white relative overflow-hidden ${projects[index].background}`}
    >
      <h1 className="absolute top-8 text-3xl md:text-4xl font-semibold text-white">
        My Work
      </h1>
      {/* Project Card */}
      <div className="w-[90%] md:w-[60%] lg:w-[80%] mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[index].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-[linear-gradient(to_bottom,_#18181B,_#27272A,_#09090B)] rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="w-full h-[360px]  ">
              <img
                src={projects[index].image}
                alt=""
                className="w-full h-full relative object-cover"
              />
            </div>
           <div className="flex items-center justify-between p-6">
  
  {/* LEFT SIDE (text) */}
  <div>
    <h2 className="text-2xl font-bold mb-2">
      {projects[index].title}
    </h2>

    <p className="text-gray-400 max-w-[600px]">
      {projects[index].desc}
    </p>
  </div>

  {/* RIGHT SIDE (button) */}
  <div className="flex items-center">
    <button className="px-5 py-2 bg-white text-black rounded-lg font-semibold cursor-pointer hover:bg-gray-200 transition">
      View Project
    </button>
  </div>

</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevProject}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full hover:scale-110 transition"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextProject}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full hover:scale-110 transition"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
