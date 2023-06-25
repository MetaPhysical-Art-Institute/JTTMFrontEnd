import React from 'react'
import "./alana.css"
import alana1 from "./alana1.svg"
import alana2 from "./alana2.svg"
import list from "./art.svg"
import logo from "./alanalogo.svg"


const Alana = () => {
  return (
    
<div className='art'>

<img alt='alana' src={alana1}></img>
<img alt='alana2' src={alana2}></img>

 
 
 <div className="bio">
 <img className='img' src={list}></img>
 </div>

 <div className='alanalogo'>
<img alt='logo' src={logo}></img>

 </div>
 </div>
  )
}
    



export default Alana