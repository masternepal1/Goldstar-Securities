import React from "react";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import Language from "./Language";

const Headerbar = () => {
  const icons = [
    { src: facebook, name: "Facebook" },
    { src: whatsapp, name: "Whatsapp" },
    { src: instagram, name: "Instagram" },
    { src: linkedin, name: "LinkedIn" },
  ];

  return (
    <div className="bg-blue-600 h-12 flex items-center px-6 flex-wrap">
      {/* Text */}
      <div className="text-yellow-400 italic font-bold text-sm sm:text-base flex-1">
        Safeguarding what you value most.
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-1 sm:space-x-3">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`relative group ${index === 0 ? "ml-3 sm:ml-0" : ""}`} // Add margin-left for the first icon
          >
            <img
              src={icon.src}
              alt={icon.name}
              className="w-4 h-4 sm:w-6 sm:h-6 hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {icon.name}
            </span>
          </div>
        ))}
      </div>

      {/* Language Dropdown */}
      <Language />
    </div>
  );
};

export default Headerbar;
