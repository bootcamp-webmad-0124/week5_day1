import { useState, useEffect } from "react";

function TimerThree() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('CLICK')
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            console.log('COMPONENTE DESMONTADO E INTERVALO ANULADO')
            clearInterval(intervalId)
        }

    }, [])


    return (
        <div className="Timer">
            <h2>Timer Three</h2>

            <h3>{count}</h3>
        </div>
    );
}

export default TimerThree;
