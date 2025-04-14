import React, { use } from 'react';

const Posts = ({postPromise}) => {
    const posts = use(postPromise)
    return (
        <div>
            <h2>This Post Page are includes {posts.length} data</h2>
        </div>
    );
};

export default Posts;