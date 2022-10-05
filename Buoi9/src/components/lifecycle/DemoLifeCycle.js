import { Component } from "react";
import PostClassComponent from "./PostClassComponent";
import PostFunctionComponent from "./PostFunctionComponent";

class DemoLifeCycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: 'red',
            postId: 1,
            flagShowPostComponent: true
        }
    }

    changeColor = () => {
        this.setState({
            color: this.state.color === 'red' ? 'green' : 'red'
        })
    }

    randomPostId = () => {
        let id = Math.floor(Math.random() * 3) + 1;
        this.setState({
            postId: id
        })
    }

    togglePostComponent = () => {
        this.setState({
            flagShowPostComponent: !this.state.flagShowPostComponent
        })
    }

    render() {
        console.log('Parent DemoLifeCycle component rendered');
        return(
            <div>
                <h1 style={{color: this.state.color}}>Demo life cycle</h1>
                <button onClick={this.changeColor}>Change Color</button>
                <button onClick={this.randomPostId}>Random Post Id</button>
                <button onClick={this.togglePostComponent}>Toggle Post Component</button>
                <h3>Current post Id on the parent: {this.state.postId}</h3>
                {
                    /* this.state.flagShowPostComponent && <PostClassComponent postId={this.state.postId}/> */
                }
                <br></br>
                {
                    this.state.flagShowPostComponent &&<PostFunctionComponent postId={this.state.postId}/>
                }
            </div>
        )
    }
}

export default DemoLifeCycle;