import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";


import Home from "./pages/home";
import Game from "./pages/game";
import Marketplace from "./pages/marketplace";





// This is the chainId your dApp will work on.
const activeChainId = ChainId.Fantom;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    
    <ThirdwebProvider desiredChainId={activeChainId}>
      <BrowserRouter>
      
       <Routes>
         <Route  path="/" element={<App/>}>
           <Route path="pages/home" element={<Home />} />
           <Route path="pages/game" element={<Game />} />
           <Route path="pages/marketplace" element={<Marketplace />} />
    
           <Route path="/discord" element={() => {window.location.href = 'https://discord.gg/GgAYeUpVkW';
           return null;
          }}/>
           <Route path="/" element={<Navigate to="/pages/home" replace />}></Route>
          



         </Route>
       </Routes>
       
      </BrowserRouter>
    </ThirdwebProvider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
