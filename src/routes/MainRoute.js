import React,{useState,useEffect} from 'react';
import "../App.css";
import Axios from 'axios';
import {BrowserRouter as Router , Route } from "react-router-dom";
import {useHistory} from 'react-router-dom'

function MainRoute() {

    const [cryptoList , setCryptoList] = useState([]);

    let history = useHistory();

    useEffect(() => {
        Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=20').then(
            (response)=>{
            setCryptoList(response.data['data'])
        }
    );
    },[]);
    return (
        <>
        <div id = "header">
            <h1>CriptoLand</h1>
           </div>

               <div className="cryptoList">
                   {cryptoList.map((coin)=>{
                       return (
                       <div onClick = {() => {history.push(`/currency/${coin.id}`);
                           
                       }}>
                           
                           <h1>{coin.symbol}</h1>
                           <h1>{coin.price_usd}</h1>
                           
                           </div>
                       );
                   })}


  
    
   </div>      
        </>
    );
}

export default MainRoute
