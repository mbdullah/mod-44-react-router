import React from 'react';
import { Link } from 'react-router';

const Comment = ({comment}) => {
    const {name, id} = comment
    return (
        <div style={{
            border: '2px solid red',
            borderRadius: '20px',
            margin: '10px',
            padding: '10px'
        }}>
            <h3>{name}</h3>
            <Link to={`/comments/${id}`}>
              <button>Show More</button>
            </Link>
        </div>
    );
};

export default Comment;