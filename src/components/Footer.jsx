import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="w-full bg-[#5B6647] h-[80vh] md:h-[60vh] p-4 md:p-20 mx-auto text-[#E3E3C4] border-t-2">
        <div className="max-w-6xl mx-auto flex flex-wrap flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl mb-10 ml-7 md:ml-0 font-bold">WEB DEVELOPER</h2>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-16 ml-10 md:ml-52">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                <h3 className="text-xl md:text-2xl font-light mb-4">Contact Info</h3>
                <ul>
                  <li className="mb-2">Email: abhishek.panwar.cseiot.2022@miet.ac.in</li>
                  <li className="mb-2">Phone: 9528521770</li>
                  <li className="mb-2">Location: Meerut, India</li>
                </ul>
              </div>

              <div className="w-full sm:flex-col  sm:w-1/2">
                <h3 className="text-xl md:text-2xl font-light mb-4">Social Media</h3>
                <ul className="flex flex-row space-x-4">
                  <li className="mb-2">
                    <a target="blank" href="" className="hover:underline flex items-center">
                      <FaTwitter className="mr-2" /> Twitter
                    </a>
                  </li>
                  <li className="mb-2">
                    <a target="blank" href="https://www.linkedin.com/in/abhishek-panwar-30403220b/" className="hover:underline flex items-center">
                      <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                  </li>
                  <li className="mb-2">
                    <a  target="blank" href="https://github.com/" className="hover:underline flex items-center">
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </li>
                  {/* <li className="mb-2">
                    <a href="#" className="hover:underline flex items-center">
                      <FaFacebook className="mr-2" /> Facebook
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
