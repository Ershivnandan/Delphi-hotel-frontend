import React from "react";
import "./Dining.css";
import { motion } from "framer-motion";

const Dining = () => {
  return (
    <div className="relative">
      <div className="relative z-10 w-full h-full mb-20 overflow-hidden flex justify-center xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#1d1d1d]"></div>
        <div className="relative">
          <div className="absolute inset-x-1/2 transform -translate-x-1/2 top-[-4rem] w-[52rem] h-[52rem] bg-[#1D1D1D] rounded-full z-[-1]  xl:w-[46rem] xl:h-[46rem] lg:w-[40rem] lg:h-[42rem] md:w-[35rem] md:h-[36rem] sm:w-[24rem] sm:h-[26rem] xs:w-[19rem] xs:h-[21rem]"></div>
          <div className="flex justify-center mt-0 mb-10 xl:h-5/6 lg:h-5/6 md:h-[90%] sm:h-full xs:h-full">
            <img
              src="https://i.ibb.co/nDSzLKK/thedelphidowntownla-homepage-dining-image-03-650e00b0beeed.png"
              alt="thedelphidowntownla-homepage-dining-image-03-650e00b0beeed"
              border="0"
              className="max-w-[56rem]  xl:max-w-[44rem] lg:max-w-[40rem] md:max-w-[30rem] sm:max-w-[20rem] xs:max-w-[15rem]"
            />
          </div>
        </div>
      </div>
      <div className="absolute xl:top-[12%] lg:top-[12%] md:top-[50%] sm:top-[70%] xs:top-[70%] w-full flex justify-center">
        <p className="z-0 relative uppercase text-[10rem] xl:text-[23rem] lg:text-[18rem] md:text-[14rem] sm:text-[5rem] xs:text-[5rem] text-black">Dining</p>
        <motion.p
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          className="z-20 absolute uppercase text-transparent text-stroke text-[10rem] xl:text-[23rem] lg:text-[18rem] md:text-[14rem] sm:text-[5rem] xs:text-[5rem]"
        >
          Dining
        </motion.p>
      </div>
    </div>
  );
};

export default Dining;
