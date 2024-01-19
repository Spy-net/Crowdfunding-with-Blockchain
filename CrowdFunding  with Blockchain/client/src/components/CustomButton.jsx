import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <div>
        {/* Campgain Create Dsign and Function */}
      <button
        type={btnType}
        className={` font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
