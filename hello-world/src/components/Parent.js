import React, { PureComponent } from 'react'
import Regular from './Regular'
import Pure from './Pure'

class Parent extends PureComponent {

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
                <Regular name={this.state.name}/>
                <Pure name={this.state.name}/>
            </div>
        )
    }
}

export default Parent
