import React from 'react'

/*
function Greet(){
    return <h1>Hello, Daniel!</h1>
}
*/

// Rewriting with ES6 syntax:

// First way (through props):
// const Greet = ({props}) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello, {props.name}!</h1> 
//             <h3>You're a great {props.profession}!</h3>
//             {props.children}
//             <br/>
//         </div>
//     )    
// }

// Second way (unpacking props):
// const Greet = ({name, profession}) => {
//     console.log("Name: " + name + " | Profession: " + profession)
//     return (
//         <div>
//             <h1>Hello, {name}!</h1> 
//             <h3>You're a great {profession}!</h3>
//             <br/>
//         </div>
//     )    
// }

// Third way (unpacking props inside the function):
const Greet = props => {
    const {name, profession} = props
    return (
        <div>
            <h1>Hello, {name}!</h1> 
            <h3>You're a great {profession}!</h3>
            <br/>
        </div>
    )    
}

export default Greet