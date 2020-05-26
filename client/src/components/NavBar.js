import React from 'react'
import {Link} from '@reach/router'
import './Navbar.css'

const NavBar = () => {
    return(
        <div className = "nav">
            <Link to = '/'>Home</Link>
            <Link to = '/new'>Add Pet to the shelter</Link>
        </div>
    )

}

export default NavBar