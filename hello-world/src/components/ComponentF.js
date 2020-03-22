import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (username) => {
                            return <div>Hello, {username}!</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentF
