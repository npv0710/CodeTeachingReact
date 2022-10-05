
import './App.css';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect
} from 'react-router-dom';
/**
 * 
 * @returns Through data from child component to parent compoent must to use function props
 */
function App(props) {//props truyền data từ component cha xuống component con
    
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} />
                    {/* <Redirect from='/' to='/signin' /> */}
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
