import React from 'react';
import { useLoaderData } from 'react-router';

const CommentDetail = () => {
    const comment = useLoaderData();
    const {name, email, body} = comment
    return (
        <div>
            <h5>{name}</h5>
            <h6>Email: {email}</h6>
            <p>{body}</p>
        </div>
    );
};

export default CommentDetail;