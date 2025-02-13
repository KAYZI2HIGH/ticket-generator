"use client";

import { useAppContext } from "./context";

const ButtonGroup = ({ buttonOne, buttonTwo, disabled, type }) => {
  const { setCurrentStep } = useAppContext();

  return (
    <div className="flex flex-col md:flex-row-reverse gap-5 justify-between mt-4">
      <button
        type={type}
        className={`px-4 py-3 md:w-1/3 rounded-lg text-white  transition-all duration-300 ${
          !disabled
            ? "bg-[#24A0B5] hover:bg-[#1b8c9c]"
            : "bg-gray-600 opacity-60 cursor-not-allowed"
        }`}
        onClick={() => {
          if(!disabled && type === undefined)
           setCurrentStep((prev) => (prev !== 3 ? prev + 1 : prev));
        }}
      >
        {buttonTwo}
      </button>
      <button
        onClick={() => {
          setCurrentStep((prev) => (prev !== 1 ? prev - 1 : prev));
        }}
        className="px-4 py-3 md:w-1/3 border border-[#0E464F] rounded-lg bg-transparent text-gray-400 hover:bg-[#013338] transition-all duration-300"
      >
        {buttonOne}
      </button>
    </div>
  );
};

export default ButtonGroup;
