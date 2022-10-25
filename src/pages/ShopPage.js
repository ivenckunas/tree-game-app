import React from 'react'
import Shop from '../components/Shop'

function ShopPage({ land, setLand, seeds, setSeeds, water, setWater, money, setMoney }) {
  return (
    <div>
      <Shop
        land={land}
        setLand={setLand}
        seeds={seeds}
        setSeeds={setSeeds}
        water={water}
        setWater={setWater}
        money={money}
        setMoney={setMoney}
      />
    </div>
  )
}

export default ShopPage