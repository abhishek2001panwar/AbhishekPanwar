import React from "react";

function Footer() {
  return (
    <>
  <div class="">
  <footer class="w-full h-screen mx-auto text-black border-t-2">
    <div class="max-w-6xl mx-auto flex flex-wrap flex-col md:flex-row mt-4">
      <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <h2 class="text-5xl md:text-7xl mb-10 ml-7 md:ml-0 font-bold">WEB DEVELOPER</h2>
      </div>

      <div class="w-full md:w-2/3">
        <div class="flex flex-wrap gap-16 ml-10 md:ml-52">
          <div class="w-full sm:w-1/2 mb-8 sm:mb-0">
            <h3 class="text-xl md:text-2xl font-light mb-4">Contact Info</h3>
            <ul>
              <li class="mb-2">Email: abhishek2001panwar@gmail.com</li>
              <li class="mb-2">Phone: 9528521770</li>
              <li class="mb-2">Location: Meerut, India</li>
            </ul>
          </div>

          <div class="w-full sm:w-1/2">
            <h3 class="text-xl md:text-2xl font-light mb-4">Social Media</h3>
            <ul>
              <li class="mb-2">
                <a href="#" class="hover:underline">Twitter</a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">LinkedIn</a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">GitHub</a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}

export default Footer;
