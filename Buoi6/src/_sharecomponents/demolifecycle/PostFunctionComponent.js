import { Component } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const PostFunctionComponet = (props) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        console.log('Component did mount')
    }, [])

    useEffect(() => {
        console.log('Component did updated');
        console.log('Previous props: ');
        console.log(prevProps);

        this.getPost(this.props.postId);
    }, [props.postId])

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

    
    console.log('Post component rendered...');
    return(
        <div>
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

export default PostFunctionComponet;
