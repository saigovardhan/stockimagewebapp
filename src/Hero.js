import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Content = () => {
  return (
    <section id="Home" class="relative text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            BhanuR<span className="text-blue-500">i</span>cky
            <br class="hidden md:inline-block" />
            Photography
          </h1>
          <p class="mb-8 leading-relaxed">
            When words become unclear, I shall focus with photographs. When
            images become inadequate, I shall be content with silence.
          </p>
          <div class="flex justify-center">
            <Link
              activeClass="active"
              className=" inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              to="Gallery"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              My work
            </Link>

            <Link
              activeClass="active"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              to="Pricing"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Buy
            </Link>
          </div>
        </div>
        <div class=" flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6 justify-center items-center">
          <img
            class="object-cover object-top rounded-xl max-h-72 w-full bg-blue-500 p-1"
            alt="hero"
            src=".././images/Author.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
