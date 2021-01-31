import React from 'react'

const Hello = () => {

    // JSX Example:
    // return(
    //     <div className='exampleClass'>
    //         <h1>Hello, Daniel!</h1>
    //         <h3>This is a JSX Example</h3>
    //     </div>
    // )

    // Without JSX Example:
    return React.createElement(
        'div', 
        {id: 'hello', className: 'exampleClass'}, 
        React.createElement('h1', null, 'Hello, Daniel!')
    );
}

export default Hello