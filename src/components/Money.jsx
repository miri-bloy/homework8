import React, { useState } from 'react'

const Money = ({ setPrice, price }) => {
  // פונקציה המקבלת את הסכום של הכפתור הנלחץ
  const setThePrice = (num) => {
    // הפונקציה מעדכנת את המחיר הסופי שהמשתמש הכניס
    setPrice(price + parseInt(num));
  }

  return (
    <div id='money'>
      <div>הסכום שהוכנס: <b>{price}</b></div>
      <div id='buttons'>
        <button onClick={() => setThePrice(0.5)}></button>
        <button onClick={() => setThePrice(1)}></button>
        <button onClick={() => setThePrice(5)}></button>
        <button onClick={() => setThePrice(10)}></button>
      </div>
    </div>
  )
}

export default Money;