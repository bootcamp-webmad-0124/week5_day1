import { useState, useEffect } from "react"

function TimerTwo() {

    const [count, setCount] = useState(0)

    useEffect(() => {

        console.log("ME HE MONTADO")

        setInterval(() => {
            console.log('CLICK!')
            setCount(oldCount => oldCount + 1)
        }, 1000)

    }, [])                      // <- array vacío = fase de montaje

    return (
        <div className="Timer">

            <h2>Timer Two</h2>

            <h3>{count}</h3>
        </div>
    );
}

export default TimerTwo;
