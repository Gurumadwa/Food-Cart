import React from 'react'
import "../styles/MenuCard.css"
const MenuCard = () => {
  return (
    <div>

        <div className="card">
            <div className="id-cate">
            <p className='menu-id'>id-1</p>
            <p className='menu-color'>Catogery: evening</p>
            </div>
            <h2>Maggi</h2>
            <p className='menu-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, unde.</p>
            <br />

            <img src="images/maggi.jpg" alt="" />

            <button className='btn-menucard'>Order Now</button>
        </div>

    </div>
  )
}

export default MenuCard