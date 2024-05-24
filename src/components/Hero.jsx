import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className=" text-black ">
      {/* Hero Container */}
      <div className="container mx-auto h-screen flex flex-col  mt-20 border-b-2 leading-tight">
        {/* First Div */}
        <div className="h-80 flex  flex-col leading-tight text-wrap w-full">
          <h1 className="text-8xl font-bold mb-8 leading-none  ">I CREATE</h1>
         <div className="flex gap-2 items-center">
         <span className="text-center"> 
            <img className="w-20 h-20 rounded-xl" src="https://media.istockphoto.com/id/1152537185/photo/hacker-working-on-laptop-in-the-dark.jpg?s=612x612&w=0&k=20&c=S9odRE1_R0xaSQyjwY13tr410NKiJhJFiLRBX-X8c44=" alt="" />
            </span> <h1 className="text-8xl font-bold mb-8 leading-none">EYE OPENING</h1>
         </div>
          <h1 className="text-8xl font-bold mb-8 leading-none">WEBSITE</h1>

         
        </div>
        {/* Second Div */}
        <div className="h-20 flex justify-between items-center mx-auto border-t-2  w-full  mt-40">
          <h2 className="text-lg">For Public & Private Company</h2>
          <h2 className="text-lg">Start ups</h2>
         
         <button className="text-lg px-10 flex gap-5 hover:bg-white hover:text-black py-1.5 items-center rounded-full font-light bg-black text-white ">
            <span>Connect</span>
            <span className="text-xs border-2 rounded-full p-1 hover:bg-white hover:text-black ">
            <FaArrowRight />

            </span>
          </button>
       
        </div>
      </div>
    </div>
  );
}

export default Hero;
