import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer+1)
        }, 1000)

        return() => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <h1>Hook Timer = {timer}</h1>
            <button onClick={() => clearInterval(intervalRef.current)} >Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer
