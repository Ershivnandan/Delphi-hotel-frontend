
import { FaPhone } from "react-icons/fa";
import "./bottomnav.css";
import { IoIosMenu } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Bottomnav = ({ toggleSidebar }) => {
  return (
    <div className="fixed z-20 bottom-0 left-0 right-0 bg-white text-[#1d1d1d] hidden justify-center items-center sm:flex">
      <ul className="flex justify-center">
        <li className="border-1 border-black border-solid p-3">
          <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white text-[#1d1d1d] transition duration-300"
          >
            <IoIosMenu className="text-3xl" />
            <span className="uppercase">Menu</span>
          </button>
        </li>
        <li className="border-l-0 border-b-1 border-t-1 border-r-1 border-black border-solid p-3">
        <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white text-[#1d1d1d] transition duration-300"
          >
            <FaPhone className="text-3xl rotate-90" />
            <span className="uppercase">Call</span>
          </button>
        </li>
        <li className="border-l-0 border-b-1 border-t-1 border-r-1 border-black border-solid">
        <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 px-3 py-3 bg-[#1d1d1d] text-white transition duration-300"
          >
            
            <span className="uppercase">Check Availibility</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Bottomnav;
