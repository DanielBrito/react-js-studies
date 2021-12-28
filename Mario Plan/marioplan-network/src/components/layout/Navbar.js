import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import starImg from '../../assets/mario-star.png'

const Navbar = (props) => {
    const {auth, profile} = props
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>

    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <div id="nav-item" className="container">
                    <Link to='/' className="brand-logo">
                        <img id="star" className="materialboxed" src={starImg} alt="Mario Star"/>
                        MarioPlan
                    </Link>
                    {links}
                </div>
            </div>
        </nav>
        
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(
    mapStateToProps
)(Navbar)