import React from 'react'

import { NavLink } from 'react-router-dom'
import "./cart.css"

const Singup = () => {
    return (
        <> 
      
        <div className='singup'>
        <h2>fill ur information</h2>
            <input type="text" placeholder='name'/><br />
            <input type="text" placeholder='gmail'/><br />
            <input type="number" placeholder='age'/><br />
            <input type="number" placeholder='mobile'/><br/>
            <button className='prebtn' type="button">
             <NavLink className='active_class'  to="/cart"> singup </NavLink>
            </button>
        </div>
        </>
    )
}

export default Singup
