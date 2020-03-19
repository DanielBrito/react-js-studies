import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                <h3>You're an awesome {this.props.profession}!</h3>
                <br/>
            </div>
        )
    }
}

export default Welcome