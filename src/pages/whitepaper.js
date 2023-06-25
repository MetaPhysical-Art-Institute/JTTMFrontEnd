
import React from 'react' 
import MAIWhitepaper from "./MAI WHITEPAPER APRIL 2022.3.pdf"
import "./whitepaper.css"



export default function Whitepaper() {
  return (
    <>
 
    <div className='whitepaper'>
     
    <iframe title='Whitepaper' src={MAIWhitepaper} 
    width="800px"
    height="800px"
    > </iframe>
    
   
   
     

    </div>
    < div className='mobilewhitepaper'>
    <center>
       <h3>PDF viewer enabled with displays larger than 760px. Please visit our website to read our Whitepaper on your mobile device.
       </h3> <a href="https://www.metaphysicalartinstitute.com">Click here!</a>
    </center> 
    </div>
    
    </>
  );
}