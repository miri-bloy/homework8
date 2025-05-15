import React, { useState } from 'react'

const Money = ({ setPrice, price, sum, setSum }) => {
  // פונקציה המקבלת את הסכום של הכפתור הנלחץ
  const setThePrice = (num) => {
    // הפונקציה מעדכנת את המחיר הסופי שהמשתמש הכניס
    setPrice(price + Number(num));
  }

  return (
    <div id='money'>
      <div>הסכום שהוכנס: <b>{price}</b></div>
      <div id='buttons'>
        <button onClick={() => {setThePrice(0.5); setSum(sum-0.5)}}></button>
        <button onClick={() => {setThePrice(1); setSum(sum-1)}}></button>
        <button onClick={() => {setThePrice(5); setSum(sum-5)}}></button>
        <button onClick={() => {setThePrice(10); setSum(sum-10)}}></button>
      </div>
    </div>
  )
}

export default Money;