import React, { useState } from 'react'

const Surplus = ({setPrice, price, sum, setSum, currentProduct}) => {

  let surplus=0;
  if(price>currentProduct.price){
    surplus=price-currentProduct.price
  }
  return (
    <div>
      <div>קבלת עודף</div>
      <b>{surplus}$</b>
    </div>
  )
}

export default Surplus;