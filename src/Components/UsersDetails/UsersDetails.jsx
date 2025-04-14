import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UsersDetails = () => {

    const {userId} = useParams();
    console.log(userId);
    
    // const params = useParams();
    // console.log(params.userId);

    const user = useLoaderData();
    const {website, name} = user;
    return (
        <div>
            <h2>This is users Details here</h2>
            <h5> Name : {name}</h5>
            <p>Website : {website}</p>
        </div>
    );
};

export default UsersDetails;