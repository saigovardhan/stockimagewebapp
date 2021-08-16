import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleHam = () => {
    setOpen(!open);
    console.log(open);
  };

  const navElements = [
    {
      id: 1,
      name: "Home",
    },

    {
      id: 2,
      name: "Gallery",
    },
    {
      id: 3,
      name: "Pricing",
    },
  ];
  return (
    <div className="select-none">
      <header className="z-50 flex fixed w-full text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-white md:mb-0"
            href="index.html"
          >
            {/* <img type="image/jpg" src="./favicon-32x32.png"></img> */}
            <span className="ml-0 text-xl font-bold">
              BhanuR<span className="text-blue-500">i</span>cky
            </span>
          </div>

          <nav className="sm:ml-auto hidden  sm:flex flex-wrap items-center text-base justify-center">
            {navElements.map((element) => {
              const { id, name } = element;
              return (
                <Link
                  className="mr-5 hover:text-white hover:bg-gray-700 border border-transparent rounded-md px-2 py-1 text-white"
                  activeClass="active"
                  key={id}
                  to={name}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {name}
                </Link>
              );
            })}

            <Link
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0"
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact us
            </Link>
          </nav>
        </div>

        <div
          onClick={() => handleHam()}
          class=" mr-5 h-8 inline-flex sm:hidden items-center bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </header>
      {open ? (
        <div className="z-50 flex justify-center items-center h-full w-full">
          <div className="z-50 sm:hidden fixed bg-gray-800 top-16 w-3/4 rounded shadow-md h-3/5 text-center p-5">
            <nav className="z-50 font-semibold text-xl flex flex-col w-full h-full items-center justify-around">
              {navElements.map((element) => {
                const { id, name } = element;
                return (
                  <Link
                    className=" w-3/4  hover:text-white hover:bg-gray-700 border border-transparent rounded-md px-2 py-1 text-white"
                    activeClass="active"
                    key={id}
                    to={name}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => handleHam()}
                  >
                    {name}
                  </Link>
                );
              })}

              <Link
                className=" w-3/4 bg-gray-500 border-0 py-1 px-3 focus:outline-none  text-white hover:bg-gray-700 rounded md:mt-0"
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => handleHam()}
              >
                Contact us
              </Link>
            </nav>
          </div>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
};

export default Header;
