import React, { useState, useEffect } from "react";
import "./Events.css";
import { TfiArrowRight, TfiArrowLeft } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const SliderData = [
  {
    heading: "A Gem in Downtown",
    text: "Everything was great from the spacious rooms to the meeting space and food and beverage. The customer service was refreshing too! Highly recommend this hotel for business or leisure travel.",
    review: "–Shana",
  },
  {
    heading: "Excellent Stay!",
    text: "Wow... did I enter one of the coolest hotels in Los Angeles or what?! Absolutely terrific value, considering the rooms, service from the staff, and delicious drinks and food. I will absolutely stay here again.",
    review: "–TravelC",
  },
  {
    heading: "Wish I Could Give 10 Stars",
    text: "Great hotel and even better bar. You can tell they put a lot of thought into the cocktails and it shows through the taste and presentation. The staff is also extremely friendly and knowledgeable.",
    review: "–Austen",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const { heading, text, review } = SliderData[currentIndex];

  return (
    <div className="px-5 border-r-1 border-l-1 border-b-1 border-solid border-[#707070] mt-10 mb-5">
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
          <div className="px-5 relative text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.05 }}
              className="relative xl:px-5 lg:px-5 md:px-14 sm:px-10 xs:px-10 xl:py-0 lg:py-0 md:py-10 sm:py-10 xs:py-10"
            >
              <h1 className="text-4xl pe-14 uppercase">
                INTRIGUE THE APPETITE
              </h1>
              <div className="mt-4">
                <p className="text-sm leading-6">
                  Let your palate decide what’s on the table—classic American
                  diner fare, Japanese-omakase creations, or some light bites to
                  get started.
                </p>
              </div>
              <div className="pt-5 relative z-10">
                <span className="flex justify-start items-center">
                  <div className="Gather-together">
                    <span className="line4"></span>
                    <span className="text-[16px] cursor-pointer flex items-center">
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

      <div className="flex justify-center text-black">
        <div className="mt-20">
          <p className="text-center text-5xl">Experience Seekers Speak</p>
          <div className="flex justify-center items-center text-center mt-10 mb-10 translate-x-1/4 w-2/3">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.05 }}
              className="relative xl:px-5 lg:px-5 md:px-14 sm:px-14 xs:px-14 xl:py-0 lg:py-0 md:py-10 sm:py-10 xs:py-10"
            >
              <h1 className="text-4xl text-black">{heading}</h1>
              <div className="mt-4">
                <p className="text-sm text-black leading-6">{text}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-black leading-6">{review}</p>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <div className="xl:absolute lg:absolute md:relative sm:relative xs:relative bottom-0 right-0 flex justify-center sm:justify-end xs:justify-center">
              <div
                className="border-1 border-[#707070] px-4 py-4 hover:px-[15px] hover:py-[15px] text-black border-solid hover:bg-[#254844] hover:text-white cursor-pointer"
                onClick={handlePrevSlide}
              >
                <GoArrowLeft className="text-4xl hover:-translate-x-1 object-contain" />
              </div>
              <div
                className="border-1 border-[#707070] px-4 py-4 hover:px-[15px] hover:py-[15px] text-black border-solid hover:bg-[#254844] hover:text-white cursor-pointer"
                onClick={handleNextSlide}
              >
                <GoArrowRight className="text-4xl hover:translate-x-1 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
