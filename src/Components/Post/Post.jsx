import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {

    const {id, title} = post;
    return (
        <div style={{border:'2px solid green', padding: '10px', margin: '10px', borderRadius: '20px'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
               <button>Show More</button>
            </Link>
        </div>
    );
};

export default Post;