import React, { Component } from 'react';

import ReactDOM from 'react-dom';

class OnMouseHover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove = (e) => {
        const {clientX, clientY} = e
        this.setState({
            x: clientX,
            y: clientY
        })
    }

    componentDidMount() {
        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        console.log(rect);
        this.setState({
            x: rect.x,
            y: rect.y
        })
    }


    render() {
        return(
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                <h3>Component OnMouseHover</h3>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default OnMouseHover;