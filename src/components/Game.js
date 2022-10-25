import React from "react";
import { Link } from "react-router-dom";
import Land from "./Land";

function Game({ land, seeds, water, setSeeds, setWater, trees, setTrees, plantedTrees, setPlantedTrees, wood, setWood, setLand }) {
  const handleTreePlant = () => {
    if (land.length * 3 <= plantedTrees.length) return;
    if (seeds <= 0 || water <= 0) return;
    setTrees(trees + 1);
    if (seeds <= 0) return;
    setSeeds(seeds - 1);
    if (water <= 0) return;
    setWater(water - 1);
    setInterval(setPlantedTrees([...plantedTrees, "new tree"]), 10000);
  };

  const handleTreeHarvest = () => {
    setWood([...plantedTrees]);
    // setMoney(money + plantedTrees.length * 150)
    setSeeds(seeds + plantedTrees.length * 1);
    setWood(wood + plantedTrees.length * 10);
    setTrees(0);
    setPlantedTrees([]);
    setLand([])
  }




  return (
    <div className="game">
      <Link to="/">Back to home page</Link>
      <div>
        <p>
          Congratulations you have <b>{land.length}</b> slot(s) of land. <br /> You can plant up to <b>{(land.length * 3).toFixed(0)}</b> trees! <br />
          Press on land to plant one tree
        </p>
        <br />
        <p>Trees planted: {trees}</p>
        <p>
          Trees takes <b>60s</b> to grow. Be patient!
        </p>
        <p className="fullTrees">Full grown trees: {plantedTrees.length}</p>
        <button onClick={handleTreeHarvest} className="harverstBtn">
          Harvest trees
        </button>
        <button onClick={handleTreePlant} className="plantBtn">
          Plant a tree
        </button>

        <div className="landtree-container">
          <div>
            {land.length > 0 && land.map((el, i) => (
              <Land key={i} />
            ))}
          </div>
          <div className="trees">{plantedTrees.length > 0 && plantedTrees.map((el, i) => <img key={i} className="tree" src="https://freesvg.org/img/tree-light-green-isaiah658.png" alt="" />)}</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
