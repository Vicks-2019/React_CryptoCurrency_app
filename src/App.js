import React from 'react';
import "./App.css";
import MainRoute from "./routes/MainRoute";
import Currency from "./routes/Currency";

import {BrowserRouter as Router , Route } from "react-router-dom";

function App() {

   
    return (
        <div className = "App">
             
             <Router>
                 <Route path = "/" exact render={(props) => <MainRoute />}/>
                 <Route path = "/currency/:id" exact render={(props) => <Currency />}/>
             </Router>

               


  
    
   </div>      
      
    );
}

export default App
