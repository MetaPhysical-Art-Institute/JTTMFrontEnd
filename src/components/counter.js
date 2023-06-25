import React, { useState, useEffect } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import { useAddress } from "@thirdweb-dev/react";

function NftCounter() {
  const address = useAddress();  
  const [nftNumber, setnftNumber] = useState(0);
  const [latestBlock, setlatestBlock] = useState(0);

  const settings = {
    apiKey: "RU6Us2fG1BJwEKwnLDdYp8E-ShLYbIAB",
    network: Network.ETH_MAINNET,
  }
  
  const alchemy = new Alchemy(settings)

  useEffect(() => {
     
    async function main() {
        const latestBlock = await alchemy.core.getBlockNumber();

        setlatestBlock(latestBlock)
       
      }

    async function count(){
        const nftObject = await alchemy.core.lookupAddress(address)
         
        const nftString = JSON.stringify(nftObject)
        setnftNumber(nftString)
        
        const nftList = JSON.parse(nftString);
        const tokenId = nftList.tokenId; 
        const title = nftList.title;

        document.getElementById("tokenId").innerText = tokenId;
        document.getElementById("title").innerText= title;   
       
    }
      
      main();count()
      

  }, []);

  return (
    <div>
        <p> ENS: &nbsp;&nbsp;
        {nftNumber} </p>
 
      <p>Number of latest Block:{latestBlock}</p>
    </div>
  );
}

export default NftCounter;
