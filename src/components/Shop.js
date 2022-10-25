import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Shop({ land, setLand, seeds, setSeeds, water, setWater, money, setMoney }) {

  return (
    <div className='shop'>
      <Link to='/'>Back to home page</Link>
      {money === 500 && <h3 style={{ textAlign: 'center' }}> You have {money}$ to start with. <br /> Good Luck! <br />
        Choose wisely you can plant trees only if you have all the ingredients!</h3>}
      <div className='shop-controls'>
        <div className='shop-item'>
          <p>Land cost 50$</p>
          <button onClick={() => {
            if (money - 50 < 0) return
            setMoney(money - 50)
            setLand([...land, 'new land'])
          }}
          >buy land</button>
        </div>
        <div className='shop-item'>
          <p>Seeds cost 20$</p>
          <button onClick={() => {
            if (money - 20 < 0) return
            setMoney(money - 20)
            setSeeds(seeds + 1)
          }}>buy seeds</button>
        </div>
        <div className='shop-item'>
          <p>Water cost 10$</p>
          <button onClick={() => {
            if (money - 10 < 0) return
            setMoney(money - 10)
            setWater(water + 1)
          }}>buy water</button>
        </div>
      </div>
    </div >
  )
}

export default Shop