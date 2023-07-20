import React, { useEffect, useState } from 'react'
// import Product from './Product';
import Coin from './Product';
import axios from 'axios'
import Loader from './Loader';
const Home = () => {
  // const arr=[1,2,3,4];
  const [coins,setCoins]=useState([]);
  const [loading,setLoading]=useState(true)
  
 
  useEffect(()=>{
   
    const fetchAllCoins=async()=>{
      try{
      const {data}=await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=30"
        // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
        // {"status":{"error_code":429,"error_message":"You've exceeded the Rate Limit. Please visit https://www.coingecko.com/en/api/pricing to subscribe to our API plans for higher rate limits.
        )

        console.log(data)
        setCoins(data)
        setLoading(false)

      } catch(error){
        alert(".....Not working ....")
      }

      };

    fetchAllCoins();
  },[]);

  // // useefffect is callback function
  // useEffect(()=>{
  //   console.log("mouted-run when refresh home ");
  //   return()=>{
  //     console.log("unmouting -when change Link from home");
  //   }
  // },[]);

  return (
    <div className="container">
      <p className='heading'>All Cryptocurrencies</p>
    <div className="home">
    {

      loading ? (<Loader/>)
      : (coins.map((i)=>{
          return( <Coin name={i.name}
            price={i.current_price}
             symbol={i.symbol}
              key={i.id}  
              imageScr={i.image}/>)})  
              )
              
            }
   
    </div>
            </div>



    // <div className="container">
    //     <h1>Home</h1>
    //     {arr.map((i)=>{
    //       return(<Product value={i} key={i}/>)
    //     })}
    // </div>
  )
}

export default Home