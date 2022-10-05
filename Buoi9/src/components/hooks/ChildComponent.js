import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ChildComponent = ({ total, getRandomColor, name }) => {

    console.log('Chile component rendered...');

    const randomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i < 6; i ++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const [color, setColor] = useState('#000000 ');

    // useEffect(() => {
    //     let colorRandom = randomColor();
    //     setColor(colorRandom);
    //     getRandomColor(colorRandom);
    // }, [name])

    useEffect(() => {
        setInterval(() => {
            let colorRandom = randomColor();
            //setColor(colorRandom);
            //getRandomColor(colorRandom);
        }, 2000)
    }, [])

    return (
        <div>
            <h3>Child component</h3>
            <h4>Random color for sending to parent: {color}</h4>
        </div>
    )
}

export default React.memo(ChildComponent);