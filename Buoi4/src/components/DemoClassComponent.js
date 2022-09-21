import { Component } from "react";

class DemoClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: 'Demo class component'
        }

    }

    increaseCount = () => {
        //alert('increase count');
        this.setState(
            {
                count: this.state.count + 1,
            }
        )

        // this.setState(
        //     {
        //         count: this.state.count + 1,
        //     },
        //     function() {
        //         console.log('current count: ' + this.state.count);
        //     }
        // )

        //console.log('current count: ' + this.state.count);
    }

    randomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i ++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    createRandomColor = () => {
        let color = this.randomColor();
        this.props.getRandomColor(color);
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h1 style={{color: this.randomColor()}}>Demo class component</h1>
                <h2>Current count: {this.state.count}</h2>
                <button onClick={this.increaseCount}>Increment</button>
                <button onClick={this.createRandomColor}>Random color</button>
            </div>
        )
    }
}

export default DemoClassComponent;
