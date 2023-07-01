import { useAddress, useDisconnect, useContract, useNetwork, ConnectWallet } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { useState, useEffect } from "react";
import "./home.css"
import { Link } from 'react-router-dom';
import LeaderBoard from '../components/Leaderboard/leaderboard';
import CreateListing from '../components/Marketplace/createlisting';
import Roganite from "../components/Images/Roganite.png"





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
       <Link to="/pages/game">Play JTTM</Link> 
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
          <LeaderBoard />
          <div className='member2'>

          
          <div className='bio'>
            <div className='scroll-box'>
            <p>Unveil the gripping tale of Roganite, an extraterrestrial mineral of immense power in our game. Once harnessed for good by the enigmatic scientist Dr. Xander Van Der Klone,
               Roganite turned sinister. Driven by twisted ambitions, he cloned influential figures to manipulate the world. To foil his plans, you must collect Roganite from ATMs used by his clones.
               As the hero, navigate treacherous levels, defeat clones, and gather Roganite tokens. Only by harnessing its power can you confront Dr. Van Der Klone and restore balance. The fate of humanity hangs in the balance.
                Embark on this epic quest and prevail against evil.</p>
                
          </div>
          <button className='member'>
            <Link to="/pages/marketplace">Shrümëz Market</Link>
          </button>
          
          </div>
          <div className='Roganite'>
          <h3>Rognaite Specimen</h3>  
          <img src={Roganite}></img>
          </div>
          </div>

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