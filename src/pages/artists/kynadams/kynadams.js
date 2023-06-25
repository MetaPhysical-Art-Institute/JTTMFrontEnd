import React from 'react'
import kyn from "./Kynadams.svg"
import teckno from "./mancer.svg"
import gif from "./mancers.gif"
import list from "./art.svg"
import quote from "./kynquote.svg"


import "./kynadams.css"


const Kynadams = () => {
  return (
    <div className='art'>

     <img alt='kyn' src={kyn}></img> 
     <a href='https://www.metaphysicalartinstitute.com/post/artist-exchange-004'><img src={quote}></img></a>
      
      
      <div className="bio">
      <img src={list}></img>
      </div>
      <div>

        <div className='teckno'>
          <a href='https://www.teknomancers.xyz'><img alt='teckno' src={teckno}></img></a>
        
        </div>
        <div className='gif'>
        <img alt='gif' src={gif}></img>
        </div>
       
     
        
     
      </div>


      </div>

  )
}

export default Kynadams   