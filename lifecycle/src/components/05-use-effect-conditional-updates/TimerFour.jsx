import React, { useState, useEffect } from "react";

function TimerFour() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

    }, []);


    useEffect(() => {
        console.log("useEffect - on update");
        document.title = `${count} actualizaciones :3`;
    }, [count])


    return (
        <div className="Timer">
            <h2>Timer Four</h2>
            <h3>{count}</h3>
        </div>
    )
}

export default TimerFour