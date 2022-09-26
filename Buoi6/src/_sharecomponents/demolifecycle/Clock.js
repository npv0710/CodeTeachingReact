import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTime: new Date(),
            count: 0
        }
    }

    timeInterval = null;

    componentDidMount() {
        console.log('Clock componet did mount');
        this.timeInterval = setInterval(() => {
            this.tick();
            console.log('clock timing...')
        }, 20000)
    }

    tick() {
        this.setState({
            dateTime: new Date()
        })
    }

    shouldComponentUpdate(newProps, newState) {
        // if (newProps.titleColor != this.props.titleColor && newState.count != this.state.count) return true;
        // else return false;

        if (newProps.titleColor != this.props.titleColor || newState.dateTime != this.state.dateTime) return true;
        else return false;
    }

    componentWillUpdate(newProps){//Set new state here after received new props
        console.log('Component Clock will update...');
        console.log(newProps);
    }

    componentDidUpdate(prevProps) {
        console.log('Clock class component renderd...');
        console.log('New props received: ')
        console.log(prevProps)
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render() {
        console.log('Class Component clock rendered...')
        //console.log(this.state);

        return (
            <div className="clock">
                <h2 style={{color: this.props.titleColor}}>This is a timer</h2>
                <h3>It is {this.state.dateTime.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Clock;

