import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
        <div className="btn">
            <button className='btn-item'>Breakfast</button>
            <button className='btn-item'>Lunch</button>
            <button className='btn-item'>Evening</button>
            <button className='btn-item'>Dinner</button>
            <button className='btn-item'>All</button>
        </div>
    </div>
  )
}

export default Navbar