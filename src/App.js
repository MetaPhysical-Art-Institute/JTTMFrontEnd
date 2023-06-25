import { Outlet } from "react-router-dom";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

import "./app.css"
import SplashScreen from "./components/splash";
import { useEffect, useState } from "react";







export default function App() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000); // 5 seconds
  }, []);

  if (showSplash){
    return<SplashScreen className="splash" />;
  }

  



  return (
    <>
    <Header />
  
  <div className="app">

    <Outlet />
         
      
  
    </div>
    <Footer />

    


        
    </>
  );
}