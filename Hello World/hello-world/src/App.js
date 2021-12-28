import React, { Component } from 'react'
import './App.css'
import ComponentC from './components/ComponentC.js'
import { UserProvider } from './components/userContext'

class App extends Component {

    render() {
        return (
            <div className="App">
                <UserProvider value="Daniel">
                    <ComponentC/>
                </UserProvider>
            </div>
        )
    }
}

export default App
