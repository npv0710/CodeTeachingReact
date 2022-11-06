import { useCallback } from "react";
import { useState, useMemo } from "react"
import ChildComponentMemo from "./ChildComponentMemo";

const ParentComponentMemo = (props) => {
    const [count, setCount] = useState(0);

    const [todos, setTodos] = useState([
        'Learning React', 
        'Studying Nodejs'
    ]);

    const increment = () => {
        setCount(c => c + 1);
    }

    // const addTodo = () => {
    //     setTodos(t => [...t, 'New Todo'])
    // }

    const _addTodo = useCallback(() => {
        setTodos(t => [...t, 'New Todo'])
    }, [todos])

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    console.log('Parent component rendered...');

    return (
        // <div>
        //     <h3>My Todos</h3>
        //     {
        //         todos.map((todo, index) => {
        //             return <p key={index}>{todo}</p>
        //         })
        //     }
        //     <button onClick={addTodo}>Add todo</button>
        //     <div>-------Count--------</div>
        //     <p>Count: {count}</p>
        //     <button onClick={increment}>+</button>
        //     <h3>Expensive Calculation</h3>
        //     <p>{calculation}</p>
        // </div>

        <div>
            <ChildComponentMemo todos={todos} addTodo={_addTodo}/>
            <div>-------Count--------</div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <h3>Expensive Calculation</h3>
            <p>{calculation}</p>
        </div>
    )
}

const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i ++) {
        num += 1;
    }
    return num;
}

export default ParentComponentMemo;