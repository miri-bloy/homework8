import React from 'react'

const Products = ({ allProducts }) => {
  return (
    <div>
      {allProducts.map(p => {
        <div className='product'>
          <p>{p.name}</p>
          <img src={"/images/" + p.name + ".png"} />
          <div>
            <span>{p.price}</span>
            <b>{p.code}</b>
          </div>
        </div>
      })}
    </div>
  )
}

export default Products