import React, { useState } from 'react'

const Surplus = ({surplus}) => {
  return (
    <div>
      <div>קבלת עודף</div>
      <b>{surplus}₪</b>
    </div>
  )
}

export default Surplus;