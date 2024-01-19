import React, { useContext, createContext } from 'react';
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from 'ethers';

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x54C1Bb9ca48283585C780CD29725A628E54BA85a');
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );
  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      if (!contract) {
        throw new Error("Contract is undefined");
      }

      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        // form.image,
      ]);
      console.log("Constract Has Worked", data);
    } catch (error) {
      console.log("Something Gone Wrong In Contract", error);
    }
  };
  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
