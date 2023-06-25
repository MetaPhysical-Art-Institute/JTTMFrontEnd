import React from 'react'
import { Button } from 'shards-react'
import gyasi from "./Gyasi.svg"
import "./gyasi.css"
import list from "./art.svg"

const Gyasi = () => {
  return (
    <div className='art'>

     <img alt='gyasi' src={gyasi}></img>

      
      
      <div className="bio">
      <img src={list}></img>
      </div>
      <div>
      <iframe className='frame'
src="https://gateway.ipfscdn.io/ipfs/QmYRUpn6nZjVrraGTTvHnFVAPAgiMoUvuPJAceTMMpBfCJ/marketplace.html?contract=0xd50CeE77dff5A6506e7b95Cb3e4EeA1fD3128F49&chainId=1&listingId=2&rpcUrl=https%3A%2F%2Feth-mainnet.g.alchemy.com%2Fv2%2FRU6Us2fG1BJwEKwnLDdYp8E-ShLYbIAB&theme=system&primaryColor=green&secondaryColor=cyan"
width="500px"
height="600px"

></iframe>
      </div>
      <div className='rarible'>
      <Button>
             <a href="https://rarible.com/token/0xd6d1a5d34a8ffef48cf0ba131ab5c9632dfaa0b1:26?tab=details">View on Rarible</a> 
      </Button>
      </div>

    </div>
  )
}

export default Gyasi