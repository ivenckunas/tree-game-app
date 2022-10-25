import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import ShopPage from './pages/ShopPage';



function App() {

  const [land, setLand] = useState([])
  const [seeds, setSeeds] = useState(0)
  const [water, setWater] = useState(0)
  const [money, setMoney] = useState(500)
  const [trees, setTrees] = useState(0);
  const [plantedTrees, setPlantedTrees] = useState([]);
  const [wood, setWood] = useState(0)

  return (
    <div className='app' >
      <BrowserRouter>
        {money !== 200 && <Inventory wood={wood} land={land} seeds={seeds} water={water} money={money} setMoney={setMoney} />}
        <Routes div className="App">
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage
            land={land}
            setLand={setLand}
            seeds={seeds}
            setSeeds={setSeeds}
            water={water}
            setWater={setWater}
            money={money}
            setMoney={setMoney}
          />} />

          <Route path='/game' element={<GamePage
            land={land}
            setLand={setLand}
            seeds={seeds}
            setSeeds={setSeeds}
            water={water}
            setWater={setWater}
            trees={trees}
            setTrees={setTrees}
            plantedTrees={plantedTrees}
            setPlantedTrees={setPlantedTrees}
            wood={wood}
            setWood={setWood}
            setMoney={setMoney}
            money={money}
          />} />

          <Route path='/market' element={<MarketPage wood={wood} setWood={setWood} setMoney={setMoney} money={money} />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;


// create mini game where user "grows" trees and sell them
// first user should buy seed for tree and water from shop
// second user should buy land to grow trees on, one spot land is for 3 threes
// when user go to his land, he can plant tree
// to plant tree user should have at least one seed and a bucket of water in his inventory
// when tree is planted he grows for his own for 1 minute
// when tree is full grown, user can harvest it, sell wood, get weeds.
// every harvested tree gives random amount wood, and seeds
// also you decide
// Create pages for:
// shop - where user buys items, seeds, water, land
// game - where user plants and harvest trees
// market - where user sells his wood, and collected trees
// if this was easy, add variety to seeds and lands to buy