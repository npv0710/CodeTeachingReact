import { Component } from "react";
import TemperatureInput from "./TemperatureInput";

class ParentManageState extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            number: 0
        }
    }

    // _inputChange = (temperature) => {
    //     console.log('Function prop throw form parent to child component');

    //     console.log(temperature);

    //     this.setState({
    //         temperature: temperature
    //     })
    // }

    _inputChangeCel = (tempCel) => {
        this.setState({
            temperature: tempCel
        })
    }

    _inputChangeFah = (tempFah) => {
        this.setState({
            temperature: tempFah
        })
    }

    toCelsius = (tempFah) => {
        return (tempFah - 32) * 5 / 9;
    }

    toFahrenheit = (tempCel) => {
        return tempCel * 9 / 5 + 32;
    }

    render() {
        // let tempCel = this.state.temperature;
        // let tempFah = this.toFahrenheit(this.state.temperature);

        let tempFah = this.state.temperature;
        let tempCel = this.toCelsius(this.state.temperature);

        return (
            <div>
                {/* <h1>{this.state.temperature}</h1> */}
                <TemperatureInput 
                    type='Celsius'
                    name='Celsius'
                    x={10}
                    inputChange={this._inputChangeCel}
                    temp={tempCel}
                />
                <TemperatureInput 
                    type='Fahrenheit'
                    name='Fahrenheit'
                    y={true}
                    inputChange={this._inputChangeFah}
                    temp={tempFah}
                />
            </div>
        )
    }
}

export default ParentManageState;