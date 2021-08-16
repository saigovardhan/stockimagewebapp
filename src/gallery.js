import React from "react";
import data from "./data";

const Gallery = () => {
  return (
    <section id="Gallery" class="text-gray-400 bg-gray-900 body-font z-0">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Gallery
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            About me
            <br />
            I'm a dedicated and creative photographer with a decent experience.
            Skilled in photo retouching and color correction. A glimpse of my
            work.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row justify-center items-center  sm:flex-wrap -m-4">
          {data.map((item) => {
            const { id, name, price, image, licence } = item;
            return (
              <div key={id} class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative shadow-md">
                  <img
                    alt="gallery"
                    class="absolute inset-0 max-w-full w-80 h-64 object-cover object-left"
                    src={image}
                  />
                  <div class="px-8 py-10 relative z-10 max-w-full w-full h-64 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                      {name}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      Rs{price}/-
                    </h1>
                    <p class="leading-relaxed">{licence}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
