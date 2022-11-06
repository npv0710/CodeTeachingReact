import React from 'react';

const ChildComponentMemo = ({ todos, addTodo }) => {

    console.log('child component rendered...')

    return (
        <>
            {/* <h3>My Todos</h3>
            {
                props.todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={props.addTodo}>Add todo</button> */}

            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}>Add todo</button>
        </>
    )
}

export default React.memo(ChildComponentMemo);
//export default ChildComponentMemo;