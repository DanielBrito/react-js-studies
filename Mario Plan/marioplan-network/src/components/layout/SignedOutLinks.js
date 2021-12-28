import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right">
                <li className="nav-item"><NavLink to='/signup'>Sign Up</NavLink></li>
                <li className="nav-item"><NavLink to='/signin'>Sign In</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks