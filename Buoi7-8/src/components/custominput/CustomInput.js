import { useState } from 'react';
import './CustomInput.css';

const CustomInput = (props) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [allowed, setAllowed] = useState(false);

    const _onFocus = (e) => {
        setInputFocus(true);
    }

    const _onBlur = (e) => {
        setInputFocus(false);

        if (e.target.value != null && e.target.value !== '') {
            setAllowed(true);
        }else setAllowed(false);

    }

    const _onChange = (e) => {
        props.inputChange(e);
    }

    return (
        <div className='formcontrol-input'>
        {/* <h3>{allowed.toString()}</h3> */}
            <label
                className={inputFocus ? 'label active' : (allowed ? 'label allowed' : 'label')}
            >
                {props.label}
            </label>
            <div className='input-item'>
                <input
                    className={inputFocus ? 'active' : (allowed ? 'allowed' : '')}
                    type={props.type}
                    name={props.name}
                    
                    onFocus={_onFocus}
                    onBlur={_onBlur}

                    // onChange={(e) => props.inputChange(e)}
                    onChange={_onChange}
                />
                <fieldset className={inputFocus ? 'active' : (allowed ? 'allowed' : '')}>
                    <legend>
                        <span>{props.label}</span>
                    </legend>
                </fieldset>
            </div>
        </div>
    )
}

export default CustomInput;
