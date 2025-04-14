import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    return (
        <div>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
};

export default PostDetail;