// Import necessary modules
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Container/App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./Storage/Redux/store.js"

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
   
    
       
        <BrowserRouter>
        <Provider store={store}>
            
            <App />
            </Provider>
        </BrowserRouter>
    
);
