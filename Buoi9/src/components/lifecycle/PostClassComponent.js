import axios from "axios";
import { Component } from "react";

class PostClassComponent extends Component {
    /**
     * 
     * Mounting
     */
    constructor(props) {
        console.log("Post class component's constructor executing...");

        super(props);

        this.state = {
            post: {

            }
        }
    }
    componentWillMount() {
        console.log('Post class component will mount...');
    }

    //important
    componentDidMount() {
        console.log('Post class component did mount...');

        //this.getPostById(3);
    }

    getPostById = async (id) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

        console.log(result);
        console.log(result.data);

        this.setState({
            post: result.data
        })
    }
    /**
     * 
     * Updating
     */
    //important
    shouldComponentUpdate(nextProps, nextState) {//Kiểm tra component có cần rerender lại hay không
        console.log('next props: ');
        console.log(nextProps);

        // console.log('next state: ');
        // console.log(nextState);

        // console.log('current props: ');
        // console.log(this.props);

        if (nextProps.postId != this.props.postId) return true;

        return false;
    }

    componentWillUpdate() {// Ít dùng

    }

    //important
    componentDidUpdate(prevProps) {
        console.log('Prev props: ');
        console.log(prevProps);

        if (prevProps.postId != this.props.postId) {
            this.getPostById(this.props.postId);
        }
    }

    //important
    componentWillUnmount() {// Clear timeout, interval, cancel api
        console.log('Post class component will unmount...');
    }

     /**
     * 
     * Unmounting
     */
    render() {
        console.log('Post class component rendered...');

        return(
            <div>
                <h3>Post class component</h3>
                <h3>Post Id on the child component: {this.props.postId}</h3>
                <br></br>
                <br></br>
                <h4>User info:</h4>
                <p>User Id: {this.state.post.userId}</p>
                <p>Post Id: {this.state.post.id}</p>
                <p>Title: {this.state.post.title}</p>
                <p>Content(body): {this.state.post.body}</p>
            </div>
        )
    }
}

export default PostClassComponent;