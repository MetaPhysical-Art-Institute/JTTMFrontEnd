import React from 'react'
import maibio from "./MAI-BIO.svg"
import list from "./art.svg"

const Mai = () => {
  return (
    <div>

    
    <img alt='mai' src={maibio}></img>


    <div className="bio">
      <img src={list}></img>
      </div>
    
     
    
      
     
      <iframe className='frame' title='membership token' src="https://gateway.ipfscdn.io/ipfs/Qmb7uH1FozWt9zG15fYzmrBM9AvzvfQGU43hinmY4sEQTv/marketplace.html?contract=0xd50CeE77dff5A6506e7b95Cb3e4EeA1fD3128F49&chainId=1&listingId=4&rpcUrl=https://eth-mainnet.g.alchemy.com/v2/LYhDJbJbPS2CSU5OyMnjyKqe7X7F1Eg6" 
      width="600px"
       height="500px"
       frameborder="0">
       
       
       </iframe>
       
       &nbsp;&nbsp;&nbsp;
      

    </div>

   
  )
}

export default Mai