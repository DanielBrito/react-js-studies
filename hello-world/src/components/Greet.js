import React from 'react'

/*
function Greet(){
    return <h1>Hello, Daniel!</h1>
}
*/

// Rewriting with ES6 syntax:

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello, {props.name}!</h1> 
            <h3>You're a great {props.profession}!</h3>
            {props.children}
            <br/>
        </div>
    )    
}

export default Greet