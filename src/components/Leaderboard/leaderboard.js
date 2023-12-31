import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import "./Leaderboard.css"; // Import the CSS file for styling

import TotalSupply from "../Stats/totalSupply";
import RgtBalance from "../Stats/roganiteBalance";

// Your smart contract address here
const contractAddress = "0xa418738F3E2Fec459F94DcB5E7B787F7B4Df5666";

export default function LeaderBoard() {
  // Get the smart contract
  const { contract } = useContract(
    "0xa418738F3E2Fec459F94DcB5E7B787F7B4Df5666"
  );

  // Read the current leaders
  const { data: currentLeaders, isLoading } = useContractRead(
    contract,
    "getLeaderboard"
  );

  const displayLeaders = currentLeaders ? currentLeaders.toString() : "";

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex flex-col justify-center font-sharetech">
        <div className="leaderboard-container">
          <p className="leaders">
            RGT Leaders:{" "}
            <b>
              {isLoading ? (
                "Loading..."
              ) : (
                displayLeaders
                  .split(",")
                  .slice(0, 10)
                  .map((item, index) => (
                    <React.Fragment key={item}>
                      <div>
                        <span className="mr-1">{index + 1}.</span>
                        <span>{item.trim()}</span>
                      </div>
                      {index !== displayLeaders.split(",").slice(0, 10).length - 1 && <br />}
                    </React.Fragment>
                  ))
              )}
            </b>
          </p>

          <div className="stats">
<p>RGT Stats </p> <br>
</br>

<a>Total Supply:<TotalSupply /></a>
<RgtBalance />
<br>
</br>
</div>

          <div className="button-list">
            <Web3Button
              className="web3-button"
              contractAddress={contractAddress}
              action={(contract) => contract.call("approveERC20Tokens")}
              colorMode="light"
              accentColor="#49c32b"
            >
              1. Set Your Score
            </Web3Button>

            <Web3Button
              className="web3-button"
              contractAddress={contractAddress}
              action={(contract) => contract.call("updateLeaderboard")}
              colorMode="light"
              accentColor="#49c32b"
            >
              2. Update LeaderBoard
            </Web3Button>
          </div>
        </div>
      </div>
    </div>
  );
}