import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';


function Currency() {
    let {id} = useParams();

    const [coin , setCoin] = useState({
    name:"",
    symbol:"",
    price_btc:"",
    price_usd:"",
    volume24:0,
});

    
    useEffect(() => {
        Axios.get(`https://api.coinlore.net/api/tickers/?id=${id}`).then(
            (response)=>{
            setCoin({
                 name:response.data[0].name,
                 symbol:response.data[0].symbol,
                 price_btc:response.data[0].price_btc,
                 price_usd:response.data[0].price_usd,
                 volume24:response.data[0].volume24,

            });
        }
    );
    },[]);
    
    return (

        <div>
          <h1>Name:{coin.name}</h1> 
          <h1>Symbol:{coin.symbol}</h1>  
          <h1>Price:{coin.price_btc}</h1> 
          <h1>Price in USD:{coin.price_usd}</h1> 
          <h1>Volume in last 24 hour:{coin.volume24}</h1>   
        </div>
    );
}

export default Currency
