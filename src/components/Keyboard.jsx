import React, { useState } from 'react'
// הפונקציה מקבלת את הפונקציה שמשנה את המוצר הנבחר, ואת מערך המוצרים
const Keyboard = ({currentCode, setCurrentCode,currentProduct, setCurrentProduct, allProducts }) => {
  // משתנה המקבל תוכן הודעה מתאימה
  const [message,setMessage]=useState("");
  // פונקציה המקבלת את הטקסט של הכפתור הנלחץ
  const setCode = (text) => {
    // משתנה המקבל את שרשור הקוד לאחר ההקלדה
    const nextcode=currentCode+text;
    // הפונקציה מעדכנת את הקוד 
    setCurrentCode(nextcode);
    // אם הקוד באורך 2 תווים
    if (nextcode.length === 2) {
      // חיפוש המוצר במערך-לפי הקוד שהוקש
      const foundProduct = allProducts.find(p => p.code === nextcode);
      // אם אכן נמצא מוצר מתאים
      if (foundProduct != null) {
        // עדכון משתנה הסטייט של המוצר הנוכחי הרצוי
        setCurrentProduct(foundProduct);
      }
      else{
        // עדכון ההודעה המתאימה
        setMessage("לא נמצא אימוגי מתאים");
      }
    }
    // אם הקוד גדול מ2 תווים
    else if(nextcode.length>2){
      // עדכון הקוד-כך שישאר בו רק התו האחרון שהוקלד
      setCurrentCode(text);
    }
  }

  // פוקנציה המופעלת בלחיצה על כפתור מחיקה
  const Delete = ()=>{
    // ריקון המחרוזת
    setCurrentCode("");
    setMessage("");
  }
  return (
    <div id='keyboard'>
      <div id='screen'>
        <p>קוד: <b>{currentCode}</b></p>
        <p>מחיר: <b>{currentProduct!=null? currentProduct.price : message}</b></p>
      </div>
      <div id='buttons'>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>1</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>2</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>3</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>A</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>B</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>C</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>D</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>E</button>
        <button className='button-code' onClick={(event) => setCode(event.target.innerText)}>F</button>
      </div>
      <button id='delete' onClick={Delete}>מחק</button>
    </div>
  )
}

export default Keyboard;