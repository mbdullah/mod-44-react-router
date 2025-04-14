import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import ShowPost from '../ShowPosts/ShowPost';

const Post = ({post}) => {

    
    const [info, setInfo] = useState(false);
    
    const {id, title} = post;

    const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());

    return (
        <div style={{border:'2px solid green', padding: '10px', margin: '10px', borderRadius: '20px'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
               <button>Show More</button>
            </Link>
            <button onClick={()=>setInfo(!info)}>{info ? 'Hide' : 'Show'} info</button>
            {
                info && <Suspense fallback={<span>Loading....</span>}>
                    <ShowPost postPromise = {postPromise}></ShowPost>
                </Suspense>
            }
        </div>
    );
};

export default Post;