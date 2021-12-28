import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        // Extracting props:
        const {name, profession} = this.props
        return (
            <div>
                <h1>Welcome, {name}!</h1>
                <h3>You're an awesome {profession}!</h3>
                <br/>
            </div>
        )
    }
}

export default Welcome