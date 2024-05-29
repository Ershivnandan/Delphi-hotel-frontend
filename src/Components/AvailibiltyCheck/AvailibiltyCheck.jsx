import { Datepicker } from "flowbite-datepicker";
import "./availibilityCheck.css";
import { motion } from "framer-motion";
import DatepickerComp from "../DatePicker/DatepickerComp";
import { useState } from "react";

const AvailibiltyCheck = () => {
  const borderAnimation = {
    initial: {
      borderColor: "transparent",
      borderWidth: "0px",
    },
    animate: {
      borderColor: "#1d1d1d",
      borderWidth: "1px",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const classes = {
    className:
      "border-1 border-[#707070] border-solid text-center h-full py-5 cursor-pointer",
  };

  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const [date, setDate] = useState({startDate: null , endDate: null});


  const updateTheDates = (start, end)=> {
    setDate({
      ...date,
      startDate: start,
      endDate: end
    });
    
  }


  const handleDateChange = (startDates, endDates) => {
    updateTheDates(startDates, endDates);
  };
  

  return (
    <div>
      <div className="relative xl:flex lg:flex md:flex sm:hidden xs:hidden xl:w-full lg:w-full md:w-full border border-[#1d1d1d] border-solid">
        <div
          className={`w-[15%] ${classes.className}`}
          onClick={toggleCalendar}
        >
          {showCalendar ? "Close Calendar" : "Open Calendar"}
        </div>
        <div className={`w-[15%] ${classes.className}`}>Checkin</div>
        <div className={`w-[15%] ${classes.className}`}>Checkin</div>
        <div className={`w-[15%] ${classes.className}`}>Checkin</div>
        <button
          className={`w-[40%] ${classes.className} bg-[#1d1d1d] text-white item-hover2`}
        >
          <span className="uppercase text-center text-md">
            Check Availability
          </span>
        </button>
      </div>
      <div className="xl:flex lg:flex md:flex sm:block xs:block xl:justify-center lg:justify-center md:justify-center sm:justify-center xs:justify-center xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
        <div className={`xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full ${showCalendar ? "px-1 py-1" : "px-16 py-10" } border-l-1 border-r-0 border-[#707070] border-solid`}>
          {showCalendar ? (
            <DatepickerComp closeCalendar={toggleCalendar} onDateChange={handleDateChange}/>
          ) : (
            <div>
              <h1 className="text-black xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl xs:text-5xl text-left leading-[.8]">
                THE DELPHI LOS ANGELES
              </h1>
            </div>
          )}

          <p className="text-md text-left mt-5">
            In Ancient Greece, Delphi was considered the center of the world. A
            few thousand years later, that essence now resides at 550 Flower
            Street: a staple of downtown Los Angeles’ silhouette. Once the
            headquarters of Superior Oil, and then the focal point of the city’s
            early 2000s revitalization, our address is once again rewriting the
            script for creativity, culture, and hospitality.
          </p>
        </div>
        <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full px-10 py-10 border-l-1 border-r-1 border-[#707070] border-solid">
          <div className="">
            <img
              src="https://i.ibb.co/YQ2ZG77/delphi-homepage-intro-64be92d3214a7.webp"
              alt="delphi-homepage-intro-64be92d3214a7"
              border="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailibiltyCheck;
