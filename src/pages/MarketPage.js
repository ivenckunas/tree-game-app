import React from 'react'
import Market from '../components/Market'

function MarketPage({ wood, setWood, setMoney, money }) {
  return (
    <div>
      <Market wood={wood} setWood={setWood} setMoney={setMoney} money={money} />
    </div>
  )
}

export default MarketPage