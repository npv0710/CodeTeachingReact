import { Component } from "react";
import axios from "axios";


class PostClassComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        console.log('Component did mount')
    }

    componentWillUpdate(newProps){//Set new state here after received new props
        console.log('Component will update...');
        console.log('new props will receive: ');
        console.log(newProps);
    }

    componentDidUpdate(prevProps) {
        console.log('Component did updated');
        console.log('Previous props: ');
        console.log(prevProps);
        if (prevProps.postId !== this.props.postId)
            this.getPost(this.props.postId);
    }

    getPost = async(id) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
            console.log(response);
            // this.setState({
            //     post: response.data
            // })

        }catch (err) {
            console.log(err)
        }
    }

    render () {
        console.log('Post component rendered...');
        return(
            <div>
                <h2 style={{color:this.state.color}}>Post class componet</h2>
                <h3>Post id received from parent: {this.props.postId}</h3>
                <br></br>
                <br></br>
                <p>Id: {this.state.post.id}</p>
                <p>User Id: {this.state.post.userId}</p>
                <p>Title: {this.state.post.title}</p>
                <p>content:</p>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default PostClassComponet;
