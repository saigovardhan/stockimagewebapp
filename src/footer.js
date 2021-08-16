import React from "react";

const Footer = () => {
  return (
    <footer class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img type="image/jpg" src="./favicon-32x32.png"></img>

          <span class="ml-3 text-xl">
            BhanuR<span className="text-blue-500">i</span>cky
          </span>
        </a>
        <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2020 BhanuRicky Photography —
          <a
            href="https://twitter.com/"
            class="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rickyvarma
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
