import React from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div class="">
        <div class="min-h-screen flex items-center justify-center bg-[#626E4D]  p-0 md:p-4">
          <div class="max-w-2xl text-center">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E3E3C4] mb-10">
              About
            </h2>
            <p class="text-2xl font-semibold  md:text-3xl text-[#E3E3C4] p-2 md:p-3">
              Welcome to my portfolio! I am a dedicated professional committed
              to delivering high-quality projects. With a passion for excellence
              and a drive for innovation, I strive to exceed expectations and
              bring creative solutions to life. My expertise spans various
              domains, ensuring I can cater to diverse needs and deliver
              exceptional results. Join me on this journey as I continue to grow
              and make a positive impact in the industry.
            </p>

            < a target="blank" href="https://www.linkedin.com/in/abhishek-panwar-30403220b/">
            <button className="text-lg px-10 mx-auto m-10 flex gap-5 hover:bg-[#E3E3C4] hover:text-black py-2.5 items-center rounded-full font-light bg-black text-[#E3E3C4] ">
              <span>Know More</span>
              <span className="text-xs border-2 rounded-full p-2 hover:bg-[#E3E3C4] hover:text-black ">
                <FaArrowRight />
              </span>
            </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
