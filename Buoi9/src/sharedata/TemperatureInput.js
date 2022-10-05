import { useEffect } from "react";

const TemperatureInput = (props) => {
    console.log('props the temp component: ');
    console.log(props);

    console.log('x = ' + props.x)

    // useEffect(() => {
    //     props.inputChange(100)
    // }, [])    

    const _onChange = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);

        props.inputChange(e.target.value);

        // props.inputChange({
        //     username: 'quanghai',
        //     password: '123abc'
        // });
    }

    return (
        <div>
            <fieldset>
                <legend>
                    {props.type}
                </legend>
                <input 
                    style={{height: '30px', width: '100%'}}
                    name={props.name}
                    onChange={_onChange}
                    value={props.temp}
                />
            </fieldset>
        </div>
    )
}

export default TemperatureInput;