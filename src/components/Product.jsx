import React from 'react'

const Coin = ({name,symbol,imageScr,price}) => {
  return (
    <div className="coin">
    
      <img src={imageScr} alt={name} />
      <h1>{symbol}</h1>
      <p>{name}</p>
      <h4>₹ {price}</h4>
    </div>
   
  )
}

export default Coin

// const Product = ({value}) => {
//   return (
//     <div className="">

//       <p>{value}</p>
//     </div>
   
//   )
// }

// export default Product