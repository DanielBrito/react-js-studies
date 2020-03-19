import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment(){

        //Simple increment:
        // this.setState(
        //     {
        //         count: this.state.count+1
        //     }, 
        //     () => {
        //         console.log('Callback value = ', this.state.count)
        //     }
        // )

        // Increment Five:
        this.setState((prevState, props) => ({
            count: prevState.count
        }))

        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>You've clicked {this.state.count} times!</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
