import React from "react";
import logo from "../assests/logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">

    
      <div className="fixed left-0 top-0  w-60 flex items-center space-x-2 px-6 py-4 bg-transparent">
        <img src={logo} alt="" className="h-8 w-8" />
        <div className="text-2xl font-bold text-white hidden sm:block">
          Atul
        </div>
      </div>

      
      <div className=" flex justify-center items-center py-4 text-white">
        <span className="px-4 font-bold text-2xl">Home</span>
        <span className="px-4 font-bold text-2xl">Skills</span>
        <span className="px-4 font-bold text-2xl">Projects</span>
        <span className="px-4 font-bold text-2xl">Contact</span>
      </div>

    </div>
  );
}