import React from 'react';
import { Link, useNavigate } from 'react-router';

const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {name, id} = comment

    const handleNavigate = () =>{
        navigate(`/comments/${id}`)
    }
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
            <button onClick={handleNavigate}>button</button>
        </div>
    );
};

export default Comment;