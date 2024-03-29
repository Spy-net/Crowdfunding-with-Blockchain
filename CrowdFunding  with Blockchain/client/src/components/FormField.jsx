import React from "react";

const FormField = ({
  LabelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  return (
    <label className="flex flex-col justify-center " >
      {LabelName && (
        <span className="font-medium ml-[50px] text-[14px] leading-[25px] text-[#808191] mb-[10px]">
          {LabelName}
        </span>
      )}
      {isTextArea ? (
        <textarea/>
      )
    :(
        <input  
        required
        value={value}
        onChange={handleChange}
        type={inputType}
        step="0.1"
        placeholder={placeholder}
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px] ml-[50px]"
        />
    )}
    </label>
  );
};

export default FormField;
