import React, { use } from 'react';
import Post from '../Post/Post';

const Posts = ({postPromise}) => {
    const posts = use(postPromise)
    return (
        <div>
            <h2>This Post Page are includes {posts.length} data</h2>
            <div>
                {
                    posts.map(post => <Post key={post.id} post = {post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;