import { useState } from "react";
import "./navbar.css";
import { MdPhone } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";

const navItems = [
  "Rooms & Suites",
  "Dining & Entertainment",
  "Offers",
  "Explore",
  "Meetings & Events",
  "Our Hotel",
  "Gallery",
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(navItems[0]);

  const handleActive = (item) => {
    setActiveItem(item);
    console.log(item);
  };

  return (
    <header className="top-0 text-base">
      <div className=" flex ">
        <div className="py-2">
          <img
            src="/src/assets/navbar/logo.svg"
            alt=""
            className="h-20 max-w-[15.5rem] py-3"
          />
        </div>

        <div className=" gap-4 text-[i6px] py-2">
          <div className="flex gap-5 items-center uppercase text-right justify-end px-8 py-2">
            <ul className="gap-3 flex items-center">
              <li className="flex items-center gap-2">
                <MdPhone />
                2138928080
              </li>
              <li className="flex items-center gap-2">
                <IoDiamond />
                Best Rate Guarantee
              </li>
            </ul>
          </div>
          <div className="flex ">
            <ul className="flex gap-5 items-center uppercase px-8 ">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={` ${
                    activeItem === item ? "active" : "navitem-hover"
                  }`}
                  onClick={() => handleActive(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="custom-border w-[10%] text-black hover:bg-[#1D1D1D] hover:text-white transition duration-300">
          Reserve
        </button>
      </div>
    </header>
  );
};

export default Navbar;
