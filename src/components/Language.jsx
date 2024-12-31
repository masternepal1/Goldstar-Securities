import React, { useState } from "react";
import englishIcon from "../assets/english.svg"; // English flag icon
import nepaliIcon from "../assets/nepal.svg"; // Nepali flag icon

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    icon: englishIcon,
  });

  const languages = [{ icon: englishIcon }, { icon: nepaliIcon }];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <div className="relative inline-block ml-4 ">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-blue-500 border border-blue-700 rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition sm:mr-4 mr-0"
      >
        <img
          src={selectedLanguage.icon}
          alt="Selected Language"
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-32 sm:w-40 bg-blue-500 border border-blue-700 rounded-md shadow-lg z-10">
          {languages.map((language, index) => (
            <li key={index}>
              <button
                onClick={() => handleLanguageSelect(language)}
                className="flex items-center w-full px-4 py-2 text-left hover:bg-blue-600 focus:bg-blue-600 transition"
              >
                <img
                  src={language.icon}
                  alt="Language Icon"
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
