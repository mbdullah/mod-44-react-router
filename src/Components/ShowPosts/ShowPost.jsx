import React, { use } from 'react';

const ShowPost = ({postPromise}) => {
    const {title, body} = use(postPromise)
    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default ShowPost;