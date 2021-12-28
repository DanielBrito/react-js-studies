import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li className="nav-item"><NavLink to='/create'>New Project</NavLink></li>
                <li className="nav-item"><a href="/signin" onClick={props.signOut}>Logout</a></li>
                <li className="nav-item">
                    <NavLink to='/' className="btn btn-floating pink lighten-2">{props.profile.initials}</NavLink>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
