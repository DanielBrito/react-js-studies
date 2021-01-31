import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        // Fourth approach (just for one case):
        // return this.state.isLoggedIn && <div>Welcome, Daniel!</div>

        // Third approach:
        return(
            this.state.isLoggedIn ? (
                <div>Welcome, Daniel!</div> 
            ) : (
                <div>Welcome, Guest!</div>
            )
        )

        // Second approach:
        // let message

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome, Daniel!</div>
        // }
        // else{
        //     message = <div>Welcome, Guest!</div>
        // }

        // return <div>{message}</div>

        // First approach:
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome, Daniel!</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome, Guest!</div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome, Daniel!</div>
        //         <div>Welcome, Guest!</div>
        //     </div>
        // )
    }
}

export default UserGreeting
