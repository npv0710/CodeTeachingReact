import CustomInput from "../../components/custominput/CustomInput";
import styled from "styled-components";
import FormGroup from "../../components/formgroup/FormGroup";
import { useState } from "react";
import WithLoading from "../../components/widthloading/WithLoading";

const SigninContainer = styled.div `
    width: 500px;
    margin: auto;
    margin-top: 1.5rem;
    border: 1px solid red;
    padding: 50px;

    .title {
        ${'' /* color: red; */}
        font-size: 24px;
        font-weight: 400;
        text-align: center;
    }
`

// const H1Title = styled.h1 `
//     color: red;
// `

const Signin = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const _inputChange = (e) => {
        console.log(e);
        console.log(e.target.name);
        console.log(e.target.value);

        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    return (
        <SigninContainer className="signin">
            {/* <H1Title>Signin page</H1Title> */}
            <h1 className="title">Sign in</h1>
            <h3>username: {username}</h3>
            <h3>password: {password}</h3>
            <FormGroup>
                <CustomInput 
                    label="Username*"
                    type="text"
                    name="username"
                    inputChange={_inputChange}
                />
            </FormGroup>
            <FormGroup>
                <CustomInput 
                    label="Password*"
                    type="password"
                    name="password"
                    inputChange={_inputChange}
                />
            </FormGroup>
        </SigninContainer>
    )
}

export default WithLoading(Signin);