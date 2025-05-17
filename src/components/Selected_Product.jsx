import React from 'react'

const Selected_Product = ({productToPickup, setProductToPickup }) => {
  return (
    <div>
      {productToPickup!=null && 
      <div>
        <img src={"/images/" + productToPickup.id + ".png"} />
        <p>בבקשה!</p>
        <button onClick={()=>setProductToPickup(null)}>איסוף מוצר</button>
      </div>}
    </div>
  )
}

export default Selected_Product ;