import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border : '2px solid yellow',
        margin : '10px',
        padding : '10px',
        borderRadius : '20px'
    }

    return (
        <div style={userStyle}>
            <p>{name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;