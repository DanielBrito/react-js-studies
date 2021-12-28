import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello!'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'Bye!'
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/*First approach:*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/*Second approach:*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/*Third approach (most used):*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
