import React, { Component } from "react";

class Signin extends Component {
    constructor(props) {
        super(props);
        
        //Controll component
        this.state={
            username: '',
            password: '',
            rememberme: false
        }

        //Uncontroll component
        this.inputUsername = React.createRef(null);
        this.inputPassword = React.createRef(null);
        this.inputCheckbox = React.createRef(null);

        console.log(this.state['rememberme'])
    }

    _onChange = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.name)

        //Level 1 : viết 3 hàm onchange
        //Level 2
        if (e.target.name === 'username') {
            this.setState({
                username: e.target.value
            })
        }else if (e.target.name === 'password') {
            this.setState({
                password: e.target.value
            })
        }else if (e.target.name === 'rememberme') {
            console.log(e.target.name)
            console.log(e.target.value)
            this.setState({
                rememberme: !this.state.rememberme
            })
        }

        //Level 3
        // this.setState({
        //     [e.target.name]: e.target.name === 'rememberme' ? !this.state.rememberme : e.target.value
        // })
    }

    submitForm = (e) => {
        e.preventDefault();
        //alert(this.state.username + ';' + this.state.password + ';' + this.state.rememberme);
        alert(this.inputUsername.current.value + ';' + this.inputPassword.current.value + ';' + this.inputCheckbox.current.checked);
    }

    componentDidMount() {
        this.inputUsername.current.focus();
    }

    render() {
        return(
            <div className="signin-form">
                <h1>{this.props.title}</h1>
                <form>
                    <div className="form-group">
                        <label lablefor="username">Username</label>
                        <input 
                            className="form-controll" 
                            id="username"
                            name="username"
                            onChange={this._onChange}
                            ref={this.inputUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label lablefor="password">Password</label>
                        <input 
                            className="form-controll" 
                            id="password"
                            name="password"
                            onChange={this._onChange}
                            ref={this.inputPassword}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="checkbox" 
                            id="rememberme" 
                            name="rememberme"
                            //checked={this.state.rememberme}
                            checked={this.state.rememberme}
                            onChange={this._onChange}
                            ref={this.inputCheckbox}
                        />
                        <label htmlFor="rememberme">Remember Me</label>
                    </div>
                    <button type="submit" onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signin;