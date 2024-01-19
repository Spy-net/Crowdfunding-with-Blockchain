import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {createCampaign} = useStateContext();
  const [form, setForm] = useState({
    name: "",
    target: "",
    deadline: ""
  });

  // Function to handle form field changes
  const handleFormFieldChange = (fieldName, e) => {
    setForm({
      ...form,
      [fieldName]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    // Handle form submission here
    e.preventDefault();
    await createCampaign({ ...form, target:ethers.utils.parseUnits(form.target, 18)})
    console.log(form);
  }

//Form Design Text
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] ssm:p-10 p-4">
      {isLoading && "Loader..."}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#1A1B1D] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Raise The Fund
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[50px] ">
          <FormField
            LabelName="Fund Name"
            placeholder="Stop Poverty"
            inputType="text"
            name="name"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField
            LabelName="Target Fund"
            placeholder="50 ETH"
            inputType="text"
            name="target"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField
            LabelName="Deadline"
            placeholder="End Date"
            inputType="date"
            name="deadline"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
          
          <div className="w-full flex justify-center items-center p-4 bg-[#1A1B1D] h-[120px] rounded-[10px]">
            <img
              src={money}
              alt="money"
              className="w-[40px] h-[40px] object-contain"
            />
            <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
              You will get 100% of the raised amount
            </h4>
          </div>
          </div>
          <div className="w-full flex justify-center items-center mt-[40px]">
            <CustomButton
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#0075F8]"
            />
          </div>
      </form>
    </div>
  );
};

export default CreateCampaign;