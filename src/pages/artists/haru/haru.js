import React from 'react'
import haru from "./Haru.svg"
import list from "./art.svg"
import quote from "./haruquote.svg"

const Haru = () => {
    return (
      <div className='art'>
  
      <img alt='haru' src={haru}></img> <br></br>
      <a href='https://www.metaphysicalartinstitute.com/post/artists-exchange-001'><img src={quote}></img></a>
       
       
       <div className="bio">
       <img className='img' src={list}></img>
       </div>
       
  
  
       </div>
    )
  }
  
  export default Haru;