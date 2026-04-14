import React, { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiPython, SiTailwindcss } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { FaDocker } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import {motion, useMotionValue} from "framer-motion"
import { div } from "framer-motion/client";
export default function Skills() {
  const skills = [
    {
      icon: <IoLogoJavascript />,
      name: "Javascript"
    },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiPython />, name: "Python" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <DiNodejsSmall />, name: "Node js" },
  ];
  const repeated=[...skills,...skills]
  const [dir,setDir]=useState(-1);
  const [active,setActive]=useState(false)
  const sectionRef =useRef(null);
  const trackRef =useRef(null);
  const touchY =useRef(null);
  const x =useMotionValue(0);
  
useEffect(() => {
  const el = sectionRef.current;
  if (!el) return;

  const io = new IntersectionObserver(
    ([entry]) => {
      setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
    },
    { threshold: [0.1] }
  );

  io.observe(el);

  return () => io.disconnect();
}, []);

useEffect(()=>{
  if(!active) return;

  const onwheel = (e)=> setDir(e.deltaY > 0?-1 :1);
  const onTouchStart= (e)=> (touchY.current =e.touches[0].clientY);
  const onTouchMove =(e)=>{
    if(touchY.current == null ) return;
    const delta = e.touches[0].clientY - touchY.current
    setDir(delta> 0?1:-1)
    touchY.current=e.touches[0].clientY;
  };
  window.addEventListener('wheel',onwheel,{passive:true})
  window.addEventListener('touchstart',onTouchStart,{passive:true})
  window.addEventListener('touchmove',onTouchMove,{passive:true})

  return ()=>{
      window.removeEventListener('wheel',onwheel)
  window.removeEventListener('touchstart',onTouchStart)
  window.removeEventListener('touchmove',onTouchMove)
  }
},[active])

useEffect(()=>{
  let id;
  let last =performance.now();
  const SPEED=80;
  const tick =(now)=>{
    const dt =(now-last )/1000;
    last=now;
    let next =x.get() + SPEED*dir*dt;
    const loop =trackRef.current?.scrollWidth/2 || 0;
    
    if(loop){
      if(next<=-loop) next+= loop;
      if(next>=0) next -= loop;
    }

    x.set(next)
    id=requestAnimationFrame(tick)

  }
  id=requestAnimationFrame(tick)
  return ()=> cancelAnimationFrame(id)
},[dir,x])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-1/2 w-full pb-9 flex flex-col  items-center justify-center relative bg-black text-white overflow-hidden "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full bg-gradient-to-r  from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147] animate-pulse top-0 left-10 w-[300px] h-[300px] opacity-20 blur-[120px]"/>
        <div className="absolute rounded-full bg-gradient-to-r  from-[#8e5cf1] via-[#5b2ca0] to-[#1f1147] animate-pulse bottom-0 right-10 w-[300px] h-[300px] opacity-15 blur-[140px] delay-300"/>


      </div>
      <motion.h2 className="text-4xl mt-5 sm:5xl font-bold bg-clip-text text-transparent  bg-gradient-to-r  from-[#8e5cf1] via-[#5b2ca0] to-[#3f238a] z-10"
      initial={{opacity:0,y:-10}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.1}}>
        My Skills

      </motion.h2>
      <motion.p className="mt-2 mb-7 text-white/90 text-base sm:text-lg z-10"
       initial={{opacity:0,y:-10}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.1}}>
        Modern Application | Modern Technologies

      </motion.p>
      <div className="relative w-full overflow-hidden ">
        <motion.div className="flex gap-10 text-6xl text-[#8e5cf1] mt-3"
        ref={trackRef}
        style={{x,whiteSpace:"nowrap",willChange:"transform"}}
        >
        {
          repeated.map((s,i)=>(
            <div key={i} className="flex flex-col items-center gap-2 min-w-30"
            aria-label={s.name}
            title={s.name}>
             <span className="hover:scale-125 transition-transform duration-300">
              {s.icon}
             </span>
              <p className="text-sm">
              {s.name}
              </p>
            </div>
          ))
        }
        </motion.div>
      </div>
    </section>
  );
}
