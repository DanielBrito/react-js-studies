import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Child')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent
