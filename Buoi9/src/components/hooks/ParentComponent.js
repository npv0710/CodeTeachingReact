import { useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

import styled from "styled-components";
import { useCallback } from "react";

const ParentContainer = styled.div `
    display: flex; 
    flex-direction: column;
    padding-left: 2rem;

    input {
        width: 250px;
        height: 32px;
        margin-top: 1rem;
        font-size: 1rem;
    }
`

const sum = (a, b) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i ++) {
        
    }
    return parseInt(a) + parseInt(b);
}

const storeSet = new Set(); 

const ParentComponent = (props) => {
    const [name, setName] = useState('');
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    //const total = sum(value1, value2);

    const total = useMemo(() => sum(value1, value2), [value1, value2]);

    const [color, setColor] = useState('black');

    // const _getRandomColor = color => {
    //     setColor(color);
    // }

    const testFunctinNormally = () => {
        setValue1(v => v + 1);
    }

    const _getRandomColor = useCallback(color => {
        console.log('Get random color running...');
        setColor(color);
    }, [color])


    const [count, setCount] = useState(0);
	const [countOther, setCountOther] = useState(0);
	
	// const increase = () => setCount(count + 1);
	// const decrease = () => setCount(count - 1);
	
	// const increaseOther = () => setCountOther(countOther + 1);
	// const decreaseOther = () => setCountOther(countOther + 1);

    const increase = useCallback(() => setCount(count + 1), [count]);
    
	const decrease = useCallback(() => setCount(count - 1), [count]);
	
	const increaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
	const decreaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
	
	storeSet.add(increase);
	storeSet.add(decrease);
	storeSet.add(increaseOther);
	storeSet.add(decreaseOther);
	
	console.log(storeSet);

    console.log('Parent component rendered...');

    return (
        <ParentContainer>
            <h1>Current value 1: {value1}</h1>
            <input type='text' placeholder="Name"
                onChange={(e) => setName(e.target.value)} 
            />
            <input type='text' placeholder="Value 1"
                onChange={(e) => setValue1(e.target.value)} 
            />
            <input type='text' placeholder="Value 2"
                onChange={(e) => setValue2(e.target.value)} 
            />
            <h3 style={{color: color}}>{name}</h3>
            <br></br>
            <br></br>
            <ChildComponent getRandomColor={_getRandomColor}/>

            <div>Count: {count}</div>
				<button onClick={increase}>+</button>
				<button onClick={increase}>-</button>

				<div>Count other: {countOther}</div>
				<button onClick={increaseOther}>+</button>
				<button onClick={decreaseOther}>-</button>
        </ParentContainer>
    )
}

export default ParentComponent;