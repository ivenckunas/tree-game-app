import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (

    <div>
      <div className="home-nav">
        <Link to='/shop'>Shop</Link>
        <Link to='/game'>Game</Link>
        <Link to='/market'>Market</Link>
      </div>

    </div>
  )
}

export default HomePage