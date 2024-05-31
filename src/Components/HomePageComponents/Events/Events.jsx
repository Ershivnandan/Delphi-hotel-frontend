import React from "react";
import "./Events.css";
import { TfiArrowRight } from "react-icons/tfi";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <div className="px-5 border-r-1 border-l-1 border-b-1 border-solid border-[#707070] ">
      <div className="flex justify-center xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col bg-[#254844]">
        <div className="xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full">
          <img
            src="https://i.ibb.co/0s2q2XC/delphi-homepage-events-64be95d53df4d.jpg"
            alt="delphi-homepage-events-64be95d53df4d"
            border="0"
          />
        </div>
        <div className="relative xl:w-[30%] lg:w-[30%] md:w-full sm:w-full xs:w-full flex justify-center items-center xl:flex-col lg:flex-col md:flex-col sm:flex-col xs:flex-col">
          <p className="xl:absolute lg:absolute md:relative sm:relative xs:relative top-0 right-0 text-white uppercase xl:text-8xl lg:text-7xl md:text-8xl sm:text-7xl xs:text-6xl -mt-3">
            events
          </p>
          <div className="px-5  relative text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.05 }}
              className="relative xl:px-5 lg:px-5 md:px-14 sm:px-10 xs:px-10 xl:py-0 lg:py-0 md:py-10 sm:py-10 xs:py-10"
            >
              <h1 className="text-4xl  pe-14 uppercase">
                INTRIGUE THE APPETITE
              </h1>
              <div className="mt-4">
                <p className="text-sm  leading-6">
                  Let your palate decide what’s on the table—classic American
                  diner fare, Japanese-omakase creations, or some light bites to
                  get started.
                </p>
              </div>
              <div className="pt-5 relative z-10">
                <span className="flex justify-start items-center">
                  <div className="Gather-together">
                    <span className="line4"></span>
                    <span className=" text-[16px] cursor-pointer flex items-center">
                      Gather together
                      <TfiArrowRight className="w-8 text-xl" />
                    </span>
                  </div>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
