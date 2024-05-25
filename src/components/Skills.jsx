import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiGit } from 'react-icons/si';

const Skills = () => {
  
//register scroll trigger
useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.skill-box', {
    y: -300,
    duration: 1,
    scale: 1,
    ease: 'power3.inOut',
    stagger: 0.3,
    scrollTrigger: {
      trigger: 'section',
      start: 'top 10%',
      end: 'bottom 100%',
      scrub: 1
    }
  });
}
, []);
  return (
    <div className="bg-zinc-800">
      {/* Skill Set Section */}
      <section className="w-full min-h-screen bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Skill Set</h2>
          {/* Skill Boxes */}
          <div className="grid parent grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
            {/* Skill Box 1 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <FaHtml5 className="text-4xl text-orange-600 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">HTML</h3>
              <p className="text-gray-700">Experienced in creating semantic and accessible markup.</p>
            </div>
            {/* Skill Box 2 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <FaCss3Alt className="text-4xl text-blue-500 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">CSS</h3>
              <p className="text-gray-700">Skilled in styling and responsive design using CSS.</p>
            </div>
            {/* Skill Box 3 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <FaJs className="text-4xl text-yellow-500 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
              <p className="text-gray-700">Proficient in JavaScript for interactive web development.</p>
            </div>
            {/* Skill Box 4 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <SiTailwindcss className="text-4xl text-teal-500 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-gray-700">Expert in using Tailwind for utility-first CSS styling.</p>
            </div>
            {/* Skill Box 5 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <FaReact className="text-4xl text-blue-400 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p className="text-gray-700">Experienced in building dynamic UIs with React.</p>
            </div>
            {/* Skill Box 6 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <FaNodeJs className="text-4xl text-green-500 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p className="text-gray-700">Skilled in server-side development with Node.js.</p>
            </div>
            {/* Skill Box 7 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <SiExpress className="text-4xl text-black mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Express</h3>
              <p className="text-gray-700">Proficient in building RESTful APIs with Express.</p>
            </div>
            {/* Skill Box 8 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <SiMongodb className="text-4xl text-green-400 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
              <p className="text-gray-700">Experienced in NoSQL databases with MongoDB.</p>
            </div>
            {/* Skill Box 9 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <SiGit className="text-4xl text-red-500 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Git</h3>
              <p className="text-gray-700">Proficient in version control using Git.</p>
            </div>
            {/* Skill Box 10 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 skill-box">
              <FaGithub className="text-4xl text-black mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-700">Experienced in collaborative development with GitHub.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;