import React from 'react'

function Memo({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memo)
