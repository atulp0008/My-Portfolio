import React from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiPython, SiTailwindcss } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { FaDocker } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import {motion} from "framer-motion"
export default function Skills() {
  const skills = [
    {
      icon: <IoLogoJavascript />,
      name: "Javascipt"
    },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiPython />, name: "Python" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <DiNodejsSmall />, name: "Node js" },
  ];
  return (
    <section
      id="skills"
      className="h-1/2 w-full pb-9 flex flex-col  items-center justify-center relative bg-black text-white overflow-hidden "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full bg-gradient-to-r  from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147] animate-pulse top-0 left-10 w-[300px] h-[300px] opacity-20 blur-[120px]"/>
        <div className="absolute rounded-full bg-gradient-to-r  from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147] animate-pulse bottom-0 right-10 w-[300px] h-[300px] opacity-15 blur-[140px] delay-300"/>


      </div>
      <motion.h2 className="text-4xl mt-5 sm:5xl font-bold bg-clip-text text-transparent  bg-gradient-to-r  from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147] z-10"
      initial={{opacity:0,y:-10}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.1}}>
        My Skills

      </motion.h2>
      <motion.p className="mt-2 mb-9 text-white/90 text-base sm:text-lg z-10"
       initial={{opacity:0,y:-10}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.1}}>
        Modern Application | Modern Technologies

      </motion.p>

    </section>
  );
}
