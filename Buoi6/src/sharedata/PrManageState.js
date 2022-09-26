import { Component } from "react";
import TemperatureInput from "./TemperatureInput";

class PrManageState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempperature: '',
            faInputChanged: false,
            celInputChanged: false,
        }
    }

    onChangeCelsius = (celsius) => {
        this.setState({
            tempperature: celsius,
            celInputChanged: true,
            faInputChanged: false,
        })
    }

    onChangeFahrendeit = (fahrenheit) => {
        this.setState({
            tempperature: fahrenheit,
            faInputChanged: true,
            celInputChanged: false,
        })
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    render() {
        let tempCelsius = this.state.celInputChanged? this.state.tempperature: this.toCelsius(this.state.tempperature);

        let tempFahrenheit = this.state.faInputChanged? this.state.tempperature: this.toFahrenheit(this.state.tempperature);
        return (
            <div>
                <TemperatureInput 
                    temperatureType='Celsius' 
                    onChangeInput={this.onChangeCelsius}
                    name='tempCel'
                    temp={tempCelsius}
                />
                <TemperatureInput 
                    temperatureType='Fahrenheit' 
                    onChangeInput={this.onChangeFahrendeit}
                    name='tempFah'
                    temp={tempFahrenheit}
                />
            </div>
        )
    }
}

export default PrManageState;