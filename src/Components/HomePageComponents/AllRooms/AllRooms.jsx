import React from "react";
import { motion } from "framer-motion";
import { TfiArrowRight } from "react-icons/tfi";
import "./Allrooms.css";

const AllRooms = () => {
  return (
    <div className=" relative w-[100vw] h-full bg-[#1d1d1d] py-2 my-10 overflow-hidden flex justify-center">
      <div className="w-full h-full px-5 py-10 flex justify-center overflow-hidden relative">
        <motion.div
          className="bg-[#1d1d1d] w-full h-full z-10 absolute"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <img
          className="z-9"
          src="https://i.ibb.co/ZJG5VZS/delphi-homepage-rooms-64be951902ebd.jpg"
          alt="delphi-homepage-rooms-64be951902ebd"
          border="0"
        />
      </div>
      <div className="z-20 absolute max-w-[83rem] max-h-[23rem] bg-white right-12 bottom-16 flex justify-center">
        <div className="relative ps-2 pe-16 flex flex-col text-left">
          <div className="relative top-2 left-0 block">Rooms</div>
          <div className="w-[10rem] flex justify-center items-center relative translate-y-16 ">
            <h1 className="text-3xl">PEACE & QUIET</h1>
          </div>
        </div>
        <div className="px-[2rem] py-[3rem] border-l-1 border-solid border-[#707070] max-w-[40rem]">
          <div className="">
            From premium amenities to personalized experiences, our 205 spacious
            guest rooms and two penthouses create an environment of
            sophistication, elegance, and comfort that sets The Delphi apart.
          </div>
          <div className="pt-5">
            <span className="flex justify-start items-center ">
              <button>
                <div className="All-rooms">
                  <span className="line2"></span>
                  <span className="text-black text-[16px] cursor-pointer flex items-center">
                    View all rooms
                    <TfiArrowRight className="w-8 text-xl" />
                  </span>
                </div>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
