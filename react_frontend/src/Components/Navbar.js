import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='Navcontainer'>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li> <Link to="add-employee">Add Employee</Link></li>
            </ul>



        </div>
    )
}

export default Navbar