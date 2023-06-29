import { useContract, useContractRead } from "@thirdweb-dev/react";

import React from "react";


// Your smart contract address here
const contractAddress = "0x7980602A62D0E133A318D193Ce495A55128a130A";

export default function TotalSupply() {
  // Get the smart contract
  const { contract } = useContract(
    "0x7980602A62D0E133A318D193Ce495A55128a130A"
  );

  // Read the current TotalSupply
  const { data: totalSupply, isLoading} = useContractRead(contract, "totalSupply");

  const currentTotalSupply = totalSupply ? totalSupply.toString().slice(0, -18) : "";


  return (

    <>
  <b> {isLoading ? "Loading..." : currentTotalSupply} </b>
    </>

  )

  }