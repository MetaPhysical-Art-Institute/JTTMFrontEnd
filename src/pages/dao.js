import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'shards-react'
import { Blockie, NativeBalance, Widget } from 'web3uikit'
import dao from "../assets/images/DAO.svg"
import "./dao.css"
import { useAddress, useNetwork }  from '@thirdweb-dev/react'
import { ChainId } from '@thirdweb-dev/sdk'
import { useMoralisWeb3Api } from "react-moralis";
import console from 'console-browserify'

 
 
function Dao () {




const address = useAddress();
const network = useNetwork();
const Web3Api = useMoralisWeb3Api();

if (network?.[0].data.chain.id !== ChainId.Polygon) {
  return (
    <div className="unsupported-network">
      <h2>Our DAO is run on Polygon!</h2>
      <p>
        For cheaper gas fees during transactions we run our DAO on MATIC/Polygon! 
        Switch your connected wallet to the Polygon network to view the dashboard!
      </p>
    </div>
  );
}

const fetchTokenBalances = async () => {
  const options = {
    chain: "matic",
    address: "0x38440C9799E19503CD1A45b56a380AbDf111d106",
   
    
  };
  const balances = await Web3Api.account.getTokenBalances(options);
  console.log(balances)
   
}; 

fetchTokenBalances();
  


  


  return (

    
    <>

      
    
       <img src={dao}></img>
       
       <div className='widget'>
           <div style={{ display: 'grid', gap: '20px', padding: '40px 20px' }}>
        
       <Widget>
        
       <p><Blockie seed={address} /></p>  
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p>MATIC Balance:  <NativeBalance /> </p>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p>GWOP Treasury Balance: {fetchTokenBalances} </p>

      

      
      </Widget>
      <Widget>
       <h2>Welcome to MetaPhysical Art Institute's DAO!</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>Here members will be able to view their MATIC balance, 
        the GWOP Treasury balance, and make proposals if they hold 15000 GWOP tokens or more. We are super excited to vote
        on whatever members decide to propose! Eventually we will decide where funds are spent once the GWOP token has some
        liquidity on the exchanges! Get your MATIC ready because we are about to drop the GWOP!!!  </p>

      </Widget>
      <Widget>
        <p>We are currently building our voting dApp. It will be a separate app 
        will run entirely on the Polygon network and will only be for the proposal and voting side of the DAO. Thanks for being here!</p>
      </Widget>


        
       </div>

   </div>   

   <div className="widget">
       <Link to="/pages/portal">
             <Button>The Lab</Button>
           </Link>

        <Button>
          <a href="https://mai-vote-dao.vercel.app">MAI Vote Dashboard</a>
        </Button>
</div>   
      
    
  
    

</>
  )
}

export default Dao




  







