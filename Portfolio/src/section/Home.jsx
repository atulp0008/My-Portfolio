import { useMemo } from "react";
import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";
import React from "react";
import avatar from "../assests/avator1.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atul-patel-34a699297/",
  },
  { Icon: FaGithub, label: "Github", href: "https://github.com/atulp0008" },
];

export default function Home() {
  const roles = useMemo(
    () => ["MERN Stack Developer", "Software Engineer"],
    [],
  );
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && current.length > subIndex) setSubIndex((v) => v + 1);
        else if (!deleting && current.length === subIndex)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticleBackground />
      <div className="absolute inset-0  pointer-events-none">
        <div
          className="absolute top-0 left-0
       w-[40vw] sm:w-[30vw] md:w-[25vw]
       h-[40vw] sm:h-[30vw] md:h-[25vw]
      max-w-[500px] max-h-[500px]
      rounded-full
   bg-gradient-to-r from-[#4b1f6f] via-[#6a3fb5] to-[#8e5cf1]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse"
        ></div>
        <div
          className="absolute bottom-0 right-0
       w-[40vw] sm:w-[30vw] md:w-[25vw]
       h-[40vw] sm:h-[30vw] md:h-[25vw]
      max-w-[500px] max-h-[500px]
      rounded-full
   bg-gradient-to-r from-[#4b1f6f] via-[#6a3fb5] to-[#8e5cf1]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
     animate-[pulse_3s_ease-in-out_0.5s_infinite]"
        ></div>
      </div>
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[40rem] lg:ml-20">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
           bg-gradient-to-r from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147] drop-shadow-[0_0_25px_rgba(91,44,160,0.6)]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm
              <br />
              <span className="text-gray-300 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap ">
                Atul Patel
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl  text-gray-300 max-w-2xl mx-auto "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I craft high-performance MERN applications, turning abstract ideas
              into dynamic, real-world experiences that are elegant, scalable,
              and impactful.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                My Resume
              </a>
            </motion.div>
            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  className=" transform hover:scale-130 transition-all duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div
          className="absolute top-1/2 -translate-y-1/2  pointer-events-none"
          style={{
            right:"80px" ,width:"min(22vw,410vw)",height:"min(38vw,760px)", borderRadius:"50%",
            filter:"blur(38px)", opacity:0.32,
            background:"conic-gradient(from 0deg , #8e5cf1,#5b2ca0,#1f1147,#8e5cf1)"

          }}/>
          <motion.img
            src={avatar}
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "0px",
              width: "min(45vw , 780px) ",
              maxHeight: "90vh",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            alt="Atul Patel"
          />
        </div>
      </div>
    </section>
  );
}
