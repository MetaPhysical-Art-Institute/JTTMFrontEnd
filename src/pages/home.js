import { useAddress, useDisconnect, useContract, useNetwork, ConnectWallet } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { useState, useEffect } from "react";
import "./home.css"
import { Link } from 'react-router-dom';
import LeaderBoard from '../components/Leaderboard/leaderboard';





function Home() {

   const address = useAddress();
 
   const network = useNetwork();
   const disconnectWallet = useDisconnect();
   const edition = useContract("0x73EfadA5C7B523CFAF187dB4CF23cB5c6f63c5EE", "edition").contract
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
             <div className='member'>
            <p>Journey To The Mothership!
              <br></br>
              Log In or Click "Game" to Play!
            </p>
            </div>
            <div className='signin'>
            {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <div className='connect'>
        <ConnectWallet /> <br></br>


       <button>
       <Link to="/pages/game">Game</Link> 
       </button>

        

        
        </div>
      )}
      </div>
      </div>
             </>
         )
     }

     if (network?.[0].data.chain.id !== ChainId.Fantom) {
      return (
        <div className="unsupported-network">
         <p>Please Switch to Fantom Network</p>
        
        </div>
      );
    }


    
    
    
     ///////***MEMBERS AREA *//////// THE CLEAN ROOM ***///**** */


     if (hasClaimedNFT) {
      return (
        <>
          <p className='member'>Journey Membership Area</p>
          <p className='member'>THANKS FOR PLAYING!!</p>
          <div className='signin'>
          <button>
            <Link to="/pages/marketplace">Shrümëz Market</Link>
          </button>
          </div>
          <LeaderBoard />

          <div className='button-container'>
           
            <button className='button-container' onClick={disconnectWallet}>Disconnect Wallet</button>
          </div>
          
          
        </>
      )
    }
    
    
    
    
    
    
    

   
   
   
   
   
   
   
   
   
   
   
   
   ////***NON - MEMBERS AREA *//////
   
   

   return (
    <>
    <div className='member'>
      <p>You gotta play to get in! </p>
   
     
      <center>
      <button className="button-container" onClick={disconnectWallet}>Disconnect Wallet</button>
      </center>
      </div>
    </>
   );
  };

export default Home;