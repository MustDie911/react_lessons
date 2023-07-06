import {useEffect, useState} from "react";

import {getPosts} from "../../services/posts.api.service";

import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    let [post, setPost] = useState({});

    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, [])

    const select = (item) => setPost(item);

    return (
        <div>
            {post.id &&
                <div>
                    <h3>userId: {post.userId}.</h3>
                    <h3>Title: {post.title}</h3>
                    <h3>Body: {post.body}</h3>

                </div>}
            {
                posts.map(value => <Post key={value.id}
                                         item={value}
                                         select={select}
                />)
            }

        </div>
    )
}