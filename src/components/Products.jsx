import React from 'react'

const Products = ({ allProducts }) => {
  return (
    <div id='products'>
      {allProducts.map(p =>
        <div className='product-products'>
          {p.id > 0 && 
          <div>
            <p>{p.name}</p>
            <img src={"/images/" + p.id + ".png"} className='img-products' />
            <div className='details'>
              <b>קוד: {p.code}</b>
              <span>מחיר: {p.price}</span>
            </div>
          </div>}
        </div>
      )}
    </div>
  )
}

export default Products