import { useState } from 'react';
import { Web3Button } from '@thirdweb-dev/react';
import "./sponsor.css" 


export default function Component() {
  const [duration, setDuration] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [imageURI, setImageURI] = useState('');
  const [price, setPrice] = useState('');

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleImageURIChange = (event) => {
    setImageURI(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAction = async (contract) => {
    

    const options = {
      value: ""
    };

    contract.send('signUpAsSponsor', [duration, companyName, imageURI, price], options);
  };

  return (
    <div>
      <input
        type="number"
        value={duration}
        onChange={handleDurationChange}
        placeholder="Enter Duration"
      />
      <input
        type="text"
        value={companyName}
        onChange={handleCompanyNameChange}
        placeholder="Enter Company Name"
      />
      <input
        type="text"
        value={imageURI}
        onChange={handleImageURIChange}
        placeholder="Enter Image URI"
      />
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
        placeholder="Enter Donation"
      /><br></br>
      <Web3Button
        contractAddress="0x559aC8e8B90986a9ab746e1CEAAA003b4cad1Aae"
        action={handleAction}
        value={price}
      >
        Sponsorship Sign Up
      </Web3Button>
    </div>
  );
}
