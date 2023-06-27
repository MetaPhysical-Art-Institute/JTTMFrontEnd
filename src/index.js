import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";


import Home from "./pages/home";
import Game from "./pages/game";
import Market from "./pages/marketplace";





// This is the chainId your dApp will work on.
const activeChainId = ChainId.Fantom;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    
    <ThirdwebProvider desiredChainId={activeChainId}
      sdkOptions={{
        gasless: {
          // By specifying a gasless configuration - all transactions will get forwarded to enable gasless transactions
          openzeppelin: {
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/7f5e27e6-9244-408b-ae16-3c56a2aebdd5/runs/webhook/9b2c6388-360e-40a3-988c-ddecf68dd225/H7sfRfe6XqtvFy8YtkmL7f", // your OZ Defender relayer URL
            relayerForwarderAddress: "0xc82BbE41f2cF04e3a8efA18F7032BDD7f6d98a81", // the OZ defender relayer address (defaults to the standard one)
          },
        },
        alchemyApiKey: "<alchemy-api-key>", // your Alchemy API key
        thirdwebApiKey: "<thirdweb-api-key>", // your thirdweb API key
      }}
    >
      <BrowserRouter>
      
       <Routes>
         <Route  path="/" element={<App/>}>
           <Route path="pages/home" element={<Home />} />
           <Route path="pages/game" element={<Game />} />
           <Route path="pages/marketplace" element={<Market />} />
    
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
