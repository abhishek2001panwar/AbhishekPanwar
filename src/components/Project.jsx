import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
function Project() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".project", {
      y: -300,
      duration: 1,
      scale: 1,
      ease: "power3.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".projectdiv",
        start: "top 10%",
        end: "bottom 100%",
        scrub: 1,

      },
    });
  }, []);
  return (
    <>
      <div class="">
        <div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 projectdiv">
          <h2 class="text-3xl font-light text-black text-center mb-12">
            Featured Projects
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="project w-[70vh] h-[80vh]  rounded-lg overflow-hidden p-6">
              <div class="mb-4 flex ">
                <a
                  target="blank"
                  href="https://github.com/abhishek2001panwar/Learnify_Major_Project"
                  class="text-2xl font-light text-black"
                >
                  {" "}
                  Learnify
                </a>
              </div>

              <div class="">
                <img
                  src="https://media.istockphoto.com/id/1384900056/photo/stack-of-books-light-bulb-pencil-cup-and-take-away-coffee-over-blue-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=CbT-dAKfHnrhGbvbxrnX1oh07iJWLVH5Tg15cntTzbU="
                  alt="Project Image"
                  class="w-[40vh] md:w-full h-[60vh] object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4 mt-3">
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Node
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Tailwind
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  React
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  MongoDB
                </button>
              </div>

              <div></div>
            </div>
            <div class="project w-[70vh] h-[80vh]  rounded-lg overflow-hidden p-6">
              <div class="mb-4 flex ">
                <a
                  target="blank"
                  href="https://github.com/abhishek2001panwar/Blog"
                  class="text-2xl font-light text-black"
                >
                  {" "}
                  Blogify
                </a>
              </div>

              <div class="">
                <img
                  src="https://media.istockphoto.com/id/1822218750/photo/two-speech-bubbles-with-play-icon.jpg?s=612x612&w=0&k=20&c=z9HXo2MjJXRsQKWqCuU2OTHkkTHPHqVVXLyqvs2-iiU="
                  alt="Project Image"
                  class="w-[40vh] md:w-full h-[60vh] object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4 mt-3">
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Node
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Ejs
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Express
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  MongoDB
                </button>
              </div>

              <div></div>
            </div>
            <div class="project w-[70vh] h-[80vh]  rounded-lg overflow-hidden p-6">
              <div class="mb-4 flex ">
                <a
                  target="blank"
                  href="https://fashion-react-iota.vercel.app/"
                  class="text-2xl font-light text-black"
                >
                  {" "}
                  Fashion
                </a>
              </div>

              <div class="">
                <img
                  src="https://media.istockphoto.com/id/1484146410/photo/young-friends-complimenting-female-friend-carrying-shopping-bag.jpg?s=612x612&w=0&k=20&c=iHQfCH8qxjPV6CfN2ESCfIfHrfYNAA76NZj6rzjjwyI="
                  alt="Project Image"
                  class="w-[40vh] md:w-full h-[60vh] object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4 mt-3">
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Html
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Tailwind
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  React
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  ContextApi
                </button>
              </div>

              <div></div>
            </div>
            <div class="project w-[70vh] h-[80vh]  rounded-lg overflow-hidden p-6">
              <div class="mb-4 flex ">
                <a
                  target="blank"
                  href="https://github.com/abhishek2001panwar/TastyBites"
                  class="text-2xl font-light text-black"
                >
                  {" "}
                  TastyBites
                </a>
              </div>

              <div class="">
                <img
                  src="https://media.istockphoto.com/id/1215072571/photo/cooking-food-using-recipe-on-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=99XjNSTjzzNBzbglYk51fX1TyDjTX5ot3pNca9UhAr4="
                  alt="Project Image"
                  class="w-[40vh] md:w-full h-[60vh] object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4 mt-3">
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Node
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Express
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Ejs
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  MongoDB
                </button>
              </div>

              <div></div>
            </div>

            <div class="project w-[70vh] h-[80vh]  rounded-lg overflow-hidden p-6">
              <div class="mb-4 flex ">
                <a
                  target="blank"
                  href="https://github.com/abhishek2001panwar/React_Quotes"
                  class="text-2xl font-light text-black"
                >
                  {" "}
                  Quoteify
                </a>
              </div>

              <div class="">
                <img
                  src="https://media.istockphoto.com/id/1737269591/photo/3d-rendering-of-speech-bubble-3d-pastel-chat-icon-set-set-of-3d-speak-bubble.jpg?s=612x612&w=0&k=20&c=UZ0fDyi2GRAW85Zh4uCelp6SuzETGVxmUv060FGj3o4="
                  alt="Project Image"
                  class="w-[40vh] md:w-full h-[60vh] object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4 mt-3">
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Html
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Tailwind
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  React
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Javascript{" "}
                </button>
              </div>

              <div></div>
            </div>
            <div class="project w-[70vh] h-[80vh]  rounded-lg overflow-hidden p-6">
              <div class="mb-4 flex ">
                <a
                  target="blank"
                  href="https://github.com/abhishek2001panwar/codsoft"
                  class="text-2xl font-light text-black"
                >
                  {" "}
                  Connectify
                </a>
              </div>

              <div class="">
                <img
src="https://media.istockphoto.com/id/540407554/photo/enter-key-with-find-job-businessman.jpg?s=612x612&w=0&k=20&c=1DNKuljPeunCMOPzcWM0itD5_B7Li4KZaC2pCcFdJd4="
alt="Project Image"
                  class="w-[40vh] md:w-full h-[60vh] object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4 mt-3">
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  MERN 
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Tailwind
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  React
                </button>
                <button className="px-2 md:px-3 py-1 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full">
                  Javascript{" "}
                </button>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;