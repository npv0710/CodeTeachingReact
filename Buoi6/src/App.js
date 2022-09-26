import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

function App() {
    
    const handleClickButton = (count) => {
        console.log('data received from child component: ')
        console.log(count)
    }

    // return ( 
    //     <div className = "App">
    //         <FormGroup width='350px'>
    //             <CustomInput
    //                 label='Username *'
    //                 type='text'
    //                 name='username'
    //                 value=''
    //             />
    //         </FormGroup>
    //         <FormGroup width='350px'>
    //             <CustomInput
    //                 label='Password *'
    //                 type='password'
    //                 name='password'
    //                 value=''
    //             />
    //         </FormGroup>
    //     </div>
    // );
    localStorage.setItem('login', true)
    const isLoggedIn = localStorage.getItem('login')
    if (isLoggedIn === 'false') {
        return (
            <div className='App'>
                <Router>
                    <Switch>
                        <Route exact path="/signin" component={Signin} />
                        <Route exact path="/signup" component={Signup} />
                        <Redirect from="/" to="/signin" />
                    </Switch>
                </Router>
            </div>
        )
    }

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;