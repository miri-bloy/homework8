import React, { useState } from 'react'

const Money = ({currentProduct, setPrice, price, handlePurchaseAttempt}) => {
  // פונקציה המקבלת את הסכום של הכפתור הנלחץ
  const setThePrice = (num) => {
    // 
    const newPrice=price+num;
    // הפונקציה מעדכנת את המחיר הסופי שהמשתמש הכניס
    setPrice(newPrice);
    // הפעלת הפונקציה שנמצאת בקומפונטטנ הראשית ותפקידה לטפל בניסיון תשלום
    handlePurchaseAttempt(newPrice);
  }

  return (
    <div id='money'>
      <div id='message'>הסכום שהוכנס: <b>{price.toFixed(2)}₪</b></div>
      {currentProduct!=null &&
      <div id='buttons-money'>
      <button className='button-money' onClick={() => setThePrice(0.5)}></button>
      <button className='button-money' onClick={() => setThePrice(1)}></button>
      <button className='button-money' onClick={() => setThePrice(5)}></button>
      <button className='button-money' onClick={() => setThePrice(10)}></button>
    </div>}
    </div>
  )
}

export default Money;