import React from 'react'

function Inventory({ land, seeds, water, money, wood }) {

  return (
    <div className='inventory'>
      <h3>Inventory:</h3>
      <div>
        <h4>Land: {land.length} </h4>
      </div>
      <div>
        <h4>Seeds: {seeds} </h4></div>
      <div>
        <h4>Water: {water}</h4></div>
      <div>
        <h4>Wood: {wood}</h4></div>
      <div>
        <h4>Money: {money} $</h4></div>
    </div>
  )
}

export default Inventory