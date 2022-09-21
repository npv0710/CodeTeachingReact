import logo from './logo.svg';
import logo2 from './logo512.png';
import './App.css';
import Person from './components/Person';
import DemoClassComponent from './components/DemoClassComponent';
import { useState } from 'react';
/**
 * 
 * @returns Through data from child component to parent compoent must to use function props
 */
function App(props) {//props truyền data từ component cha xuống component con
    const [color, setColor] = useState('');

    const _getRandomColor = (color) => {
        console.log('color received from child component: ');
        console.log(color);
        //return color;
        setColor(color);
    }
    return (
        <div className="App">
            <Person 
                title="Buoi3 Hello React" 
                name="Person One"
                randomColor={color}
            />
            <Person title="Demo Component" name="Person Two">
                This is person component two
            </Person>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <DemoClassComponent getRandomColor={_getRandomColor}/>

        </div>
    );
}

export default App;
