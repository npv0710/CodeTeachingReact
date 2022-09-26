import { Component } from "react";
import Clock from "./Clock";
import ClockHooksLifeCycle from "./ClockHooksLifeCycle";
import PostClassComponet from "./PostClassComponent";

class DemoLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flagShowing: true,
            message: '',
            flagShowClock: true,
            titleColor: 'red',
            postId: 1,
        }
    }

    /* Mounting */
    componentWillMount() {//Khong dùng nữa
        //console.log('component willmount...');
    }

    componentDidMount() {
        console.log('component did mount...');
        this.setState({
            message: this.props.message ? this.props.message : ''
        })
    }

    componentWillUnmount() {
        console.log('component will unmount...');
    }

    /* Updating */
    componentWillReceiveProps() {
        //console.log('Component will receive props...');
    }

    shouldComponentUpdate(newProps, newState) {//important
        // console.log('should component update ?');
        // console.log(newProps);
        // console.log(newState);

        // if (newProps.message !== this.state.message) {
        //     return true
        // }else return false;

        return true;

        //logic here
        //return false;
    }

    //important
    componentWillUpdate(newProps){//Set new state here after received new props
        // console.log('Component will update...');
        // console.log(newProps);
        // this.setState({
        //     message: newProps.message
        // })
    }

    componentDidUpdate(newProps) {
        // console.log('Component did update...');
        // console.log(newProps);
    }

    shutdownClock = () => {
        console.log('Shutdown the clock')
        this.setState({
            flagShowClock: !this.state.flagShowClock
        })
    }

    changeColor = () => {
        this.setState({
            titleColor: this.state.titleColor === 'red' ? 'green' : 'red'
        })

        // this.setState({
        //     titleColor: 'red'
        // })
    }

    randomPostId = () => {
        let postId = Math.floor(Math.random() * 3) + 1;
        console.log('Post Id random on the parent component: '+ postId);
        this.setState({
            postId: postId
        })
    }

    render() {
        console.log('component render...');

        return(
            <div className="demo-lifecycle">
                <h1> Demo life cycle component</h1>
                <h3>Message form parent: {this.state.message.toUpperCase()}</h3>
                <Clock titleColor={this.state.titleColor}/>
                {/*
                {this.state.flagShowClock && <ClockHooksLifeCycle titleColor={this.state.titleColor}/>}
                <button onClick={this.shutdownClock}>Shutdown Clock</button>*/}
                {/* <button onClick={this.changeColor}>Change Color</button> */}
                <h4>Current postId: {this.state.postId}</h4>
                <button onClick={this.randomPostId}>Random Post Id</button>
                <PostClassComponet postId={this.state.postId}/>
            </div>
        )
    }
}

export default DemoLifeCycle;