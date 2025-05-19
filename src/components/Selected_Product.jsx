import React from 'react'

const Selected_Product = ({productToPickup, setProductToPickup }) => {
  return (
    <div id='Selected_Product'>
      {productToPickup!=null && 
      <div id='productToPickup'>
        <img src={"/images/" + productToPickup.id + ".png"} />
        <p>בבקשה!</p>
        <button onClick={()=>setProductToPickup(null)}>איסוף מוצר</button>
      </div>}
    </div>
  )
}

export default Selected_Product ;