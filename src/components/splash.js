import React from 'react';
import splash from "./splash.gif"
import "./splash.css"

function SplashScreen() {
  return (
    <div className="splash">
      <img src={splash}></img>
    </div>
  );
}

export default SplashScreen;
