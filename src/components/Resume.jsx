import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Resume() {
  return (
    <>
    <section className="w-full min-h-screen py-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-light text-black  mb-8">Resume</h2>
    <div className="flex flex-wrap justify-center items-center gap-8 px-4">
      {/* PDF Resume */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 w-full sm:w-1/2 md:w-1/3">
        <h3 className="text-2xl font-semibold mb-4">Download PDF</h3>
        <a href="path/to/your/resume.pdf" target="_blank" className="inline-block px-4 py-2 rounded-lg  transition duration-300">
        <button className="text-lg px-10 flex gap-5 hover:bg-white hover:text-black py-1.5 items-center rounded-full font-light bg-black text-white ">
            <span>Download</span>
            <span className="text-xs border-2 rounded-full p-1 hover:bg-white hover:text-black ">
            <FaArrowRight />

            </span>
          </button>
       

        </a>
      </div>
      {/* Online Resume */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 w-full sm:w-1/2 md:w-1/3">
        <h3 className="text-2xl font-semibold mb-4">View Online</h3>
        <a href="path/to/your/online-resume" target="_blank" className="inline-block  px-4 py-2 rounded-lg  transition duration-300">
        <button className="text-lg px-10 flex gap-5 hover:bg-white hover:text-black py-1.5 items-center rounded-full font-light bg-black text-white ">
            <span>View Online</span>
            <span className="text-xs border-2 rounded-full p-1 hover:bg-white hover:text-black ">
            <FaArrowRight />

            </span>
          </button>

                 </a>
      </div>
    </div>
  </div>

</section>

    </>
  )
}

export default Resume