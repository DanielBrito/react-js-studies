import React, { Component } from 'react'
import Memo from './Memo'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Daniel'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Daniel'
            })
        }, 2000)
    }
    
    render() {
        console.log('********************** Parent -> render() **********************')
        return (
            <div>
                Parent component
                {/* <Regular name={this.state.name}/> */}
                {/* <Pure name={this.state.name}/> */}
                <Memo name={this.state.name}/>
            </div>
        )
    }
}

export default Parent
