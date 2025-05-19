import React, { useState } from 'react'

const Surplus = ({surplus}) => {
  return (
    <div id='surplus'>
      <div>קבלת עודף</div>
      <p>{surplus>0 && <b>surplus.toFixed(2)₪</b>}</p>
    </div>
  )
}

export default Surplus;