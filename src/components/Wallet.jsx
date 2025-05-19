import React, { useState } from 'react'

const Wallet = ({ sum, setSum }) => {

  // משתנה השומר את הערך שהוקלד באינפוט
  const [value, setValue] = useState("");

  const update = () => {
    // בדיקה שלא לחצו סתם על כפתור העדכון-מבלי להכניס ערך באינפוט
    if (value != 0) {
      // עדכון הסכום הנוכחי
      setSum(Number(value));
      // ריקון האינפוט
      setValue("");
    }
  }
  return (
    <div id='wallet'>
      <div id='message-wallet'>
        <p>הסכום בארנק: 
        <b>{sum.toFixed(2)}₪</b>
        </p>
      </div>
      <div id='change-wallet'>
        <input type="text" placeholder='שינוי הסכום' value={value}
          onChange={(event) => setValue(event.target.value)} />
        <button onClick={update}>עדכון</button>
      </div>
    </div>
  )
}

export default Wallet