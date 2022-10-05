import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PostFunctionComponent = (props) => {
    const [post, setPost] = useState({});
    const [count, setCount] = useState(0);

    useEffect(() => {//Component did updated
        //console.log('Post function component did mount...');
    })

    useEffect(() => {//Component did mount
        console.log('Post function component did mount...');

        //getPostById(2);

        return () => {//Component will unmount
            console.log('Post function component will unmount...');
        }

    }, [])// Mảng dependencies args (nếu [] rỗng thì tương ứng là component did mount)

    useEffect(() => {//Component did update
        console.log('Post function component did update');
        getPostById(props.postId);
    }, [props.postId])// Mảng dependencies chỉ cần 1 dependency thay đổi thì hàm này sẽ được thực thi)

    const getPostById = async (id) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

        // console.log(result);
        // console.log(result.data);

        setPost(result.data);
    }

    console.log('Post function component rendered...');

    const changeCount = () => {
        setCount(c => count + 1);
    }

    useEffect(() => {//Componnet did update
        console.log('Some actions will execute when the count changed');
    }, [count])

    return(
        <div>
            <h3>Post function component</h3>
            <h4>User info:</h4>
            <p>User Id: {post.userId}</p>
            <p>Post Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content(body): {post.body}</p>

            <button onClick={changeCount}>Change count</button>
        </div>
    )
}

export default PostFunctionComponent;