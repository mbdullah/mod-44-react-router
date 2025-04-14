import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    return (
        <div>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;