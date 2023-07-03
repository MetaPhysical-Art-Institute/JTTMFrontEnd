import React from 'react'
import "./game.css"
const Jttm = () => {
  return (
    <>
    <div className='game'>
    <iframe frameborder="0" src="https://itch.io/embed-upload/8216526?color=333333" allowfullscreen="" width="800" height="620"><a href="https://metaphysicalart.itch.io/mothershipgame">Play Journey to the Mothership! </a></iframe>    
    <br></br>
    <p>Warning: Local wallet allows you to connect using only a password and play the game; however we have not enabled local wallet exports from the game at this time. This means your NFT's and Roganite tokens will be locked inside the game until we are able to enable withdrawal! Use Metamask or another major wallet to ensure proper NFT transfer in the future! Thanks!</p>
    <br></br>
    <p>Transactions on the blockchain can sometimes take a moment, please allow time to claim tokens and the teleporter to appear! Thanks!</p>
   </div>
   </>
  )
}

export default Jttm