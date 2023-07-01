import React, { useState } from "react";
import {
  useCreateDirectListing,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import "./listing.css";

// Your smart contract address
const contractAddress = "0x0d6e7D59a2aA9fd9F0b5612eE6d5F2C324369cE9";
const fixedAssetContractAddress = "0x73EfadA5C7B523CFAF187dB4CF23cB5c6f63c5EE";
const fixedCurrencyContractAddress = "0x7980602A62D0E133A318D193Ce495A55128a130A";

function CreateListing() {
  const { contract } = useContract(contractAddress, "marketplace-v3");
  const [tokenId, setTokenId] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [duration, setDuration] = useState("10"); // Default duration is 10 days
  const [startTimestamp, setStartTimestamp] = useState(new Date());
  const [endTimestamp, setEndTimestamp] = useState(
    new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000) // Default end date is 10 days from the current date
  );
  const {
    mutateAsync: createDirectListing,
    isLoading,
    error,
  } = useCreateDirectListing(contract);

  const handleRadioButtonChange = (e) => {
    const selectedOption = e.target.value;
    setDuration(selectedOption);

    const currentTime = new Date();
    setStartTimestamp(currentTime);

    if (selectedOption === "10") {
      const tenDaysFromNow = new Date(currentTime.getTime() + 10 * 24 * 60 * 60 * 1000);
      setEndTimestamp(tenDaysFromNow);
    } else if (selectedOption === "30") {
      const thirtyDaysFromNow = new Date(currentTime.getTime() + 30 * 24 * 60 * 60 * 1000);
      setEndTimestamp(thirtyDaysFromNow);
    }
  };

  const handleSubmit = () => {
    createDirectListing({
      assetContractAddress: fixedAssetContractAddress,
      tokenId,
      pricePerToken,
      currencyContractAddress: fixedCurrencyContractAddress,
      isReservedListing: false,
      quantity: "1",
      startTimestamp,
      endTimestamp,
    });
  };

  return (
    <div className="container">
      <div className="form">
        <p className="title">List Your Shrümëz!!</p>
        <form onSubmit={handleSubmit}>
          <label className="input-label">
            Token ID:
            <input
              type="text"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
              className="input-field"
            />
          </label>
          <label className="input-label">
            Price Per Token:
            <input
              type="text"
              value={pricePerToken}
              onChange={(e) => setPricePerToken(e.target.value)}
              className="input-field"
            />
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="duration"
                value="10"
                onChange={handleRadioButtonChange}
              />
              10 days
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                value="30"
                onChange={handleRadioButtonChange}
              />
              30 days
            </label>
          </div>
          <div className="button-container">
            <Web3Button
              className="web3-button"
              colorMode="light"
              accentColor="#49c32b"
              contractAddress={contractAddress}
              action={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Creating Listing..." : "Create Direct Listing"}
            </Web3Button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default CreateListing;
