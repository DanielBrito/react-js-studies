import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>My name is {person.name}.</h2>
            <h3>I am {person.age} years old.</h3>
            <h3>I love {person.skill}.</h3>
            <br/>
        </div>
    )
}

export default Person
