import React from 'react'
import trav from "./Trav.svg"
import list from "./art.svg"

const Trav = () => {
  return (
    <div className='art'>

    <img alt='trav' src={trav}></img> 
     
     
     <div className="bio">
     <img className='img' src={list}></img>
     </div>
     


     </div>
  )
}

export default Trav