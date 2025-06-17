"use client"


import React from 'react';
import {easeInOut, motion} from 'motion/react'

export default function Home() {
  return (
    <div className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-950 flex items-center justify-center"
    style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px,
      rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat",
      boxShadow:"0px 20px 50px rgba(8,112,184,0.7"
    }}
    >
      <motion.button 
      whileHover={{
        rotateX:20,
        rotateY:20,
        y:-5,
        
        
      }}
      style={{
        translateZ:100,
      }}
      transition={{
        duration:0.3,
        ease: "easeInOut"
      }}
        
      
      className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black"><span className='group-hover:text-cyan-500 transition-colors duration-300'>Button</span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto "></span>
        <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] blur-sm w-full  mx-auto transition-opacity duration-300 "></span>
      </motion.button>

    </div>
  );
}
