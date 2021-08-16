import React from "react";
import pricingData from "./pricingData";

const Pricing = () => {
  return (
    <section
      id="Pricing"
      class="text-gray-400 bg-gray-900 body-font overflow-hidden"
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Pricing
          </h1>
          <div class="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6">
            <p class="py-1 px-4 bg-blue-500 text-white focus:outline-none">
              Flexible plans
            </p>
            <p class="py-1 px-4 text-gray-300 focus:outline-none">
              For your needs
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          {pricingData.map((item) => {
            const { planName, price, features, whatsapp, effect } = item;
            return (
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div
                  key={planName}
                  class="h-full p-6 rounded-lg border-2 border-blue-400 flex flex-col relative overflow-hidden"
                >
                  {effect ? (
                    <span class="bg-green-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      Popular
                    </span>
                  ) : (
                    <span></span>
                  )}

                  <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                    {planName}
                  </h2>
                  <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
                    Rs {price}/-
                  </h1>
                  {features.map((feature) => {
                    return (
                      <p
                        key={feature}
                        class="flex items-center text-gray-400 mb-2"
                      >
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        {feature}
                      </p>
                    );
                  })}
                  <a
                    href={whatsapp}
                    class="flex items-center mt-auto text-white bg-transparent border border-blue-500 hover:border-green-500 py-2 px-4 w-full focus:outline-none hover:bg-green-500 rounded"
                  >
                    Buy Now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <p class="text-xs text-gray-400 mt-3">
                    This button takes you to whatsapp business
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
