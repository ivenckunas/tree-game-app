import React from 'react'
import Game from '../components/Game'

function GamePage({ land, setLand, seeds, water, setSeeds, setWater, trees, setTrees, plantedTrees, setPlantedTrees, wood, setWood, setMoney, money }) {
  return (
    <div>
      <Game land={land}
        setLand={setLand}
        seeds={seeds}
        water={water}
        setSeeds={setSeeds}
        setWater={setWater}
        trees={trees}
        setTrees={setTrees}
        plantedTrees={plantedTrees}
        setPlantedTrees={setPlantedTrees}
        wood={wood}
        setWood={setWood}
        setMoney={setMoney}
        money={money}
      />
    </div>
  )
}

export default GamePage