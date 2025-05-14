import React, { useState } from 'react'
// הפונקציה מקבלת את הפונקציה שמשנה את המוצר הנבחר, ואת מערך המוצרים
const Keyboard = ({ setCurrentProduct, allProducts }) => {
  // משתנה סטייט של הקוד שהוקש
  const [currentCode, setCurrentCode] = useState('');
  // פונקציה המקבלת את הטקסט של הכפתור הנלחץ
  const setCode = (text) => {
    // משתנה נמקבל את שרשור הקוד לאחר ההקלדה
    const nextcode=currentCode+text;
    // הפונקציה מעדכנת את הקוד 
    setCurrentCode(nextcode);
    // הגדרת המשתנה בחוץ, כדי שאוכל לבדוק את הערך שלו גם מחוץ לתנאי
    let product="";
    // אם הקוד באורך 2 תווים
    if (nextcode.length === 2) {
      // חיפוש המוצר במערך-לפי הקוד שהוקש
      product= allProducts.find(p => p.code === nextcode);
      // אם אכן נמצא מוצר מתאים
      if (product != null) {
        // עדכון משתנה הסטייט של המוצר הנוכחי הרצוי
        setCurrentProduct(product);
      }
    }
    // אם הקוד גדול מ2 תווים
    else if(nextcode>2){
      // ריקון הקוד
      setCurrentCode("");
    }
    // הדפסת המוצר לבדיקה האם הכול עובד
    console.log(product);
  }
  return (
    <div>
      <div>
        <p>הקוד שהוקש הוא: </p><b>{currentCode}</b>
      </div>
      <div>
        <button onClick={(event) => setCode(event.target.innerText)}>1</button>
        <button onClick={(event) => setCode(event.target.innerText)}>2</button>
        <button onClick={(event) => setCode(event.target.innerText)}>3</button>
        <button onClick={(event) => setCode(event.target.innerText)}>A</button>
        <button onClick={(event) => setCode(event.target.innerText)}>B</button>
        <button onClick={(event) => setCode(event.target.innerText)}>C</button>
        <button onClick={(event) => setCode(event.target.innerText)}>D</button>
        <button onClick={(event) => setCode(event.target.innerText)}>E</button>
        <button onClick={(event) => setCode(event.target.innerText)}>F</button>
      </div>
    </div>
  )
}

export default Keyboard;