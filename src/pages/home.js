import { useAddress, useDisconnect, useContract, useNetwork, ConnectWallet } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { useState, useEffect } from "react";
import "./home.css"
import { Link } from 'react-router-dom';
import LeaderBoard from '../components/Leaderboard/leaderboard';
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/uNrjG1C_Yus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>We recommend using metamask to easily keep your Shrümëz & Roganite Tokens!</p>
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
            <Link to="https://www.shrumez.store">Shrümëz Store</Link>
          </button>
          
          </div>
          <div className='Roganite'>
          <h3>Rognaite Specimen</h3>  
          <img src={Roganite}></img>
          
          </div>
          </div>

          <div className='button-container'>
           
            <ConnectWallet />
          </div>
          
          
        </>
      )
    }
    
    
    
    
    
    
    

   
   
   
   
   
   
   
   
   
   
   
   
   ////***NON - MEMBERS AREA *//////
   
   

   return (
    <>
    <div className='member'>
      <p>You gotta play to get in! </p>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZE1ROakhSeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
     
      <center>
      <ConnectWallet />
      </center>
      </div>
      <div className='member'>
      <p>Unveil the gripping tale of Roganite, an extraterrestrial mineral of immense power in our game. Once harnessed for good by the enigmatic scientist Dr. Xander Van Der Klone,
               Roganite turned sinister. Driven by twisted ambitions, he cloned influential figures to manipulate the world. To foil his plans, you must collect Roganite from ATMs used by his clones.
               As the hero, navigate treacherous levels, defeat clones, and gather Roganite tokens. Only by harnessing its power can you confront Dr. Van Der Klone and restore balance. The fate of humanity hangs in the balance.
                Embark on this epic quest and prevail against evil.</p>
      </div>
    </>
   );
  };

export default Home;