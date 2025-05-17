import React, { useState } from 'react'
// הפונקציה מקבלת את הפונקציה שמשנה את המוצר הנבחר, ואת מערך המוצרים
const Keyboard = ({currentProduct, setCurrentProduct, allProducts }) => {
  // משתנה סטייט של הקוד שהוקש
  const [currentCode, setCurrentCode] = useState('');
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
    <div>
      <div>
        <p>קוד: <b>{currentCode}</b></p>
        <p>מחיר: <b>{currentProduct!=null? currentProduct.price : message}</b></p>
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
        <button onClick={Delete}>מחק</button>
      </div>
    </div>
  )
}

export default Keyboard;