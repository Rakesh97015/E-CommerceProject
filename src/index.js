
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopContextProvider from "./context/Shopcontext.jsx"; 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider> 
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();

