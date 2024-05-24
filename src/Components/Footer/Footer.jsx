// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  const options = ["FAQ", "Media Inquiries", "Contact Us", "Careers"];

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.8,
      },
    },
  };

  const formFields = [
    { id: "fname", label: "First Name" },
    { id: "lname", label: "Last Name" },
    { id: "email", label: "Email Address" },
  ];

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const [activeItem, setActiveItem] = useState("");

  const handleActiveField = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-[#1D1D1D]">
      <motion.div
        variants={cardVariants}
        initial={"offscreen"}
        whileInView="onscreen"
      >
        <div className="flex justify-center pt-20 pb-10">
          <img src="https://i.ibb.co/bNRfgjF/logo-white.png" alt="Logo" />
        </div>
        <div className="block justify-center text-white text-center gap-5">
          <p className="foot-hover">
            <span className="child-hover-border-b-1 border-white">
              550 S Flower St
            </span>
            <br />
            <span className="child-hover-border-b-1 border-white">
              Los Angeles, CA 90071
            </span>
          </p>
          <br />
          <p className="foot-hover pt-5 text-center">
            <span className="child-hover-border-b-1 border-white">
              2138928080
            </span>
          </p>
        </div>

        <div className="mt-10">
          <ul className="flex justify-center items-center text-3xl text-white text-center pb-2 px-5">
            {options.map((item, index) => (
              <li
                className="border-white border-1 w-full p-2 item-hover"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center text-center mt-10">
          <h1 className="text-white text-4xl">Stay in The Know</h1>
        </div>

        <div className="py-10">
          <form onSubmit={handleSubmit} className="py-2 px-5">
            <div className="gap-10 flex justify-center items-center">
              {formFields.map((field) => (
                <div key={field.id} className="py-2 w-1/3 text-center">
                  <label
                    className={`block text-white relative ${
                      activeItem === field.id ? "smallLabel" : "largeLabel"
                    }`}
                    htmlFor={field.id}
                  >
                    {field.label}
                  </label>
                  <input
                    className="block h-[2.5rem] bg-transparent border-b-1 w-full text-white bg-[#1d1d1d]"
                    id={field.id}
                    type={field.id === "email" ? "email" : "text"}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    onClick={() => handleActiveField(field.id)}
                  />
                </div>
              ))}
            </div>
            <span className="flex justify-center mt-5 items-center">
              <button
                type="submit"
                className="bg-white  text-black px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
