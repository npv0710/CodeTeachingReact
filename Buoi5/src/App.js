import logo from './logo.svg';
import logo2 from './logo512.png';
import './App.css';
import Home from './pages/home/Home';
/**
 * 
 * @returns Through data from child component to parent compoent must to use function props
 */
function App(props) {//props truyền data từ component cha xuống component con
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
