import { Component, useState } from "react";

import { DemoClassComponent, DemoClassComponent2 } from "react";


Person.defaultProps = {
    classRoom: 'Rocket 24'
};

function Person (props) {
    console.log('prosp of the person component:')
    console.log(props);

    const [color, setColor] = useState('red');

    const handleChangeColor = () => {
        if (color === 'red') setColor('green');
        else setColor('red');
    }

    //render() {
        return (
            <div>
                {/* <h1 style={{color: color}}>{props.title}</h1> */}
                <h1 style={{color: props.randomColor}}>{props.title}</h1>
                <h2>Person class {props.classRoom}</h2>
                <h3>{props.name}</h3>
                <h4>{props.children}</h4>
                <button onClick={handleChangeColor}>Change title color</button>
            </div>
        )
    //}
}

// class Person extends Component {

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

export default Person;