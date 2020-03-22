import React, { Component } from 'react'
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import CounterTwo from './components/CounterTwo'

class App extends Component {

    render() {
        return (
            <div className="App">
                {/* <ClickCounterTwo/>
                <HoverCounterTwo/>
                <User render={ (isLoggedIn) => isLoggedIn ? 'Welcome, Daniel' : 'Welcome, Guest'}/> */}

                <CounterTwo>
                    {(count, incrementCount) => (
                        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
                    )}
                </CounterTwo>

                <CounterTwo>
                    {(count, incrementCount) => (
                        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
                    )}
                </CounterTwo>
            </div>
        )
    }
}

export default App
