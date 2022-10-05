import styled from "styled-components";

const FormGroupContainer = styled.div `
    margin-top: 1.2rem;
    ${'' /* width: ${p => p.with ? p.with : '100%'}; */}
`

const FormGroup = (props) => {
    console.log(props);
    return (
        <FormGroupContainer 
            className='form-group'
            // with={props.with}
            style={{width: props.width ? props.width: '100%'}}
        >
            {props.children}
        </FormGroupContainer>
    )
}

export default FormGroup;