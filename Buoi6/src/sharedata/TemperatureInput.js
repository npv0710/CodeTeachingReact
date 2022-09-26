import React, { Component } from "react";

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    _onChange = (e) => {
        this.props.onChangeInput(e.target.value);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temperature in {this.props.temperatureType} </legend>
                <input
                    name={this.props.name}
                    style={{height: '30px', width: '100%'}}
                    onChange={this._onChange}
                    value={this.props.temp}
                />
            </fieldset>
        )
    }

}

export default TemperatureInput;