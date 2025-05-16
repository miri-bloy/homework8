import React from 'react'

const Products = ({ allProducts }) => {
  return (
    <div>
      {allProducts.map(p =>
        <div className='product'>
          <p>{p.name}</p>
          <img src={"/images/" + p.id + ".png"} />
          <div>
            <b>קוד: {p.code}</b>
            <span>מחיר: {p.price}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products