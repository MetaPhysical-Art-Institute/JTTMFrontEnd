import { useAddress, useDisconnect, useContract, useNetwork, ConnectWallet } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import giveaway2 from "../assets/images/Flower Giveaway.png"
import { useState, useEffect } from "react";
import "./home.css"
import lab from "../assets/images/lab.svg"
import cleanroom from "../assets/images/cleanroom.svg"
import { Button } from 'shards-react';
import nonft from "../assets/images/nonft.svg"
import giveaway from "../assets/images/giveaway3.png"
import pste from "../assets/images/pste.svg"
import Shape from '../components/shape';
import Motm from '../components/new';
import showcase from "../assets/images/showcase.svg"
import Counter from '../components/counter';




function Home() {

   const address = useAddress();
 
   const network = useNetwork();
   const disconnectWallet = useDisconnect();
   const edition = useContract("0x63C435B5fcC51eb1d5bA2fC9D6d1EB60348F018f", "edition").contract
   const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
   
   useEffect(() => {
     if (!address) {
         return;
     }
   
     const checkBalance = async () => {
            try {
             const nfts = await edition.getOwned(address);
             setHasClaimedNFT(nfts?.length > 0);
            } catch (error) {
             setHasClaimedNFT(false);
             
            }
          };
          checkBalance();
   }, [address , edition]);
     
  
  
  
   //////**SIGN IN AREA */
  
   if (!address) {
         return (
             <>
             <div className='font-link'>
             <div className='signin'>
            <img src={lab}></img>
            {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <div className='connect'>
        <ConnectWallet />
        

        
        </div>
      )}
      </div>
      </div>
             </>
         )
     }

     if (network?.[0].data.chain.id !== ChainId.Mainnet) {
      return (
        <div className="unsupported-network">
         <img src={pste}></img>
        
        </div>
      );
    }


    
    
    
     ///////***MEMBERS AREA *//////// THE CLEAN ROOM ***///**** */


   if (hasClaimedNFT) {
       return (
        <>
        <div className='font-link'>
           <div className='signin'>
               <img src={cleanroom}></img>
               
               <div className='shape'>
               <Shape />
               </div>
               
               <br></br><br></br>
               <div className='image'>
                <img src={giveaway}></img><br></br>
                <img src={giveaway2}></img>
                <p>If you don't already have your 15k GWOP tokens please alert one of the admin on discord to get you your tokens! You need 15k in order to make proposals to our DAO! </p>
                <br></br>
                <img src={showcase}></img><br></br>
                <div className='motm'>
                <Motm />
                </div>
                <p>New collection from artist Alana Enfinity - "Past & Present" - Coming soon!</p>

                <Counter />


               </div>
             
               <br></br>  
               
               
          
             <a href='https://mai-vote-dao.vercel.app'> 
             <Button>Proposal Dashboard</Button> <br></br><br></br>
             
             
              
             </a>
             <button onClick={disconnectWallet}>X</button> 
             <br>
             </br>
             <p>Links to our discord and spatial gallery coming soon!</p>
             
           
          
        
 
         
          </div>
          </div>
</>

           
       )
   }

   
   
   
   
   
   
   
   
   
   
   
   
   ////***NON - MEMBERS AREA *//////
   
   

   return (
    <>
    <div className='signin'>
      <img src={nonft}></img>
   
     
      <center>
      <button onClick={disconnectWallet}>X</button>
      </center>
      </div>
    </>
   );
  };

export default Home;