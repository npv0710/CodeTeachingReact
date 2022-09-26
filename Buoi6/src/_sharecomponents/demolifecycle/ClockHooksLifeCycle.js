import React, { Component, useEffect, useState } from "react";

const ClockHooksLifeCycle = (props) => {
    const [dateTime, setDateTime] = useState(new Date());

    let timeInterval = null;

    useEffect(() => {
        // timeInterval = setInterval(() => {
        //     tick();
        //     console.log('clock timing...')
        // }, 10000)

        // return () => {
        //     clearInterval(timeInterval);
        // }
    }, [])

    const tick  = () => {
        setDateTime(new Date())
    }
   
    console.log("Clock hooks rendered");

    return (
        <div className="clock">
            <h2 style={{color: props.titleColor}}>This is a timer</h2>
            <h3>It is {dateTime.toLocaleTimeString()}</h3>
        </div>
    )
}

export default React.memo(ClockHooksLifeCycle);

