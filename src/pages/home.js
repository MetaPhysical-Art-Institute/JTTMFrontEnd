import { useAddress, useDisconnect, useContract, useNetwork, ConnectWallet } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { useState, useEffect } from "react";
import "./home.css"
import { Link } from 'react-router-dom';





function Home() {

   const address = useAddress();
 
   const network = useNetwork();
   const disconnectWallet = useDisconnect();
   const edition = useContract("0xbcaF4F275C315D4d092A122e20fF23e56D6A0043", "edition").contract
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

        <button>Game</button>


        

        
        </div>
      )}
      </div>
      </div>
             </>
         )
     }

     if (network?.[0].data.chain.id !== ChainId.FantomTestnet) {
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
          <p className='message'>You have successfully claimed a Shrümëz NFT and entered the members-only area of the dApp. We are working on adding a marketplace 
          and on-chain leaderboard shortly! We hope you enjoy the game! Please leave feedback at our <Link to={"/discord"}>discord</Link></p>
          
          <div className='button-container'>
            <button className='leaderboard-button'>Leaderboard</button>
            <button className='marketplace-button'>Marketplace</button>
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