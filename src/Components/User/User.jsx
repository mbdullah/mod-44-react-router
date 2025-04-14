import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    
    const [visitHome, setVisitHome] = useState(false);

    const location = useLocation();
    console.log(location);

    const userStyle = {
        border : '2px solid yellow',
        margin : '10px',
        padding : '10px',
        borderRadius : '20px'
    }

    if(visitHome){
        return <Navigate to="/"></Navigate>
    }

    return (
        <div style={userStyle}>
            <p>{name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={()=>setVisitHome(true)}>Go Home</button>
        </div>
    );
};

export default User;