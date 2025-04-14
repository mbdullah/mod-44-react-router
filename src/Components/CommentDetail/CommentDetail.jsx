import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CommentDetail = () => {
    const navigate = useNavigate();
    const comment = useLoaderData();
    const {name, email, body} = comment

    const handleNavigate = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h5>{name}</h5>
            <h6>Email: {email}</h6>
            <p>{body}</p>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default CommentDetail;