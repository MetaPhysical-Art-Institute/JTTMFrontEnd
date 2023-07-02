import { useEffect, useState } from 'react';
import { useContract, useContractRead, useAddress } from "@thirdweb-dev/react";

export default function RgtBalance() {
  const address = useAddress();  
  const { contract } = useContract("0x7980602A62D0E133A318D193Ce495A55128a130A");
  const { data, isLoading } = useContractRead(contract, "balanceOf", [address])
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!isLoading && data) {
      const balanceNumber = parseInt(data._hex, 16); // Convert the hex value to a decimal number
      const formattedBalance = balanceNumber.toString().slice(0, -18); // Remove the last 18 characters to remove the extra zeros
      setBalance(formattedBalance);
    }
  }, [data, isLoading]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Your RGT Balance: {balance}</p>
      )}
    </div>
  );
}
