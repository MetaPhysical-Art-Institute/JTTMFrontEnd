import { useActiveClaimCondition, useContract} from "@thirdweb-dev/react";
import React from "react";

// Your smart contract address here
const contractAddress = "0x73EfadA5C7B523CFAF187dB4CF23cB5c6f63c5EE";

export default function ActiveClaim() {
  // Get the smart contract
  const { contract } = useContract(contractAddress);

  // Read the current active claim condition
  const { data: activeClaimCondition, isLoading } = useActiveClaimCondition(contract);

  // Format and access the relevant properties
  const maxClaimableSupply = activeClaimCondition?.maxClaimableSupply || "";
  const startTime = activeClaimCondition?.startTime ? new Date(activeClaimCondition.startTime) : "";
  const price = activeClaimCondition?.price || "";
  const currencySymbol = activeClaimCondition?.currencyMetadata?.symbol || "";
  const availableSupply = activeClaimCondition?.availableSupply || "";
  const currencyAddress = activeClaimCondition?.currencyAddress || "";


  return (
    <>
      <b>{isLoading ? "Loading..." : `Max Claimable Supply: ${maxClaimableSupply}`}</b>
      <p>{isLoading ? "" : `Start Time: ${startTime}`}</p>
      <p>{isLoading ? "" : `Price: ${price}`}</p>
      <p>{isLoading ? "" : `Currency Symbol: ${currencySymbol}`}</p>
      {//<p>{isLoading ? "" : `Available Supply: ${availableSupply}`}</p>*//}
}
    </>
  );
}
