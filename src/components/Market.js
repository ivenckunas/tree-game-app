import React from 'react'
import { Link } from 'react-router-dom'

function Market({ wood, setWood, setMoney, money }) {

  const sellWood = () => {
    setWood(0)
    setMoney(money + (wood * 3.5))
  }
  return (
    <div className='market'>
      <h2>Marketplace</h2>
      <button className='sell-wood' onClick={sellWood}>Sell {wood} wood for {wood * 3.5}$</button>
      <Link to='/'>Back to home page</Link>
    </div>
  )
}

export default Market