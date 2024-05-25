import React from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div class="">
        <div class="min-h-screen flex items-center justify-center bg-[#626E4D]  p-0 md:p-4">
          <div class="max-w-2xl text-center">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#434B34] mb-10">
              About
            </h2>
            <p class="text-2xl font-semibold  md:text-3xl text-[#434B34] p-2 md:p-3">
              Welcome to our portfolio! We are a team of dedicated professionals
              committed to delivering high-quality projects. With a passion for
              excellence and a drive for innovation, we strive to exceed
              expectations and bring creative solutions to life. Our expertise
              spans across various domains, ensuring that we can cater to
              diverse needs and deliver exceptional results. Join us on our
              journey as we continue to grow and make a positive impact in the
              industry.
            </p>
            <button className="text-lg px-10 mx-auto m-10 flex gap-5 hover:bg-white hover:text-black py-1.5 items-center rounded-full font-light bg-black text-white ">
              <span>Know More</span>
              <span className="text-xs border-2 rounded-full p-1 hover:bg-white hover:text-black ">
                <FaArrowRight />
              </span>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
