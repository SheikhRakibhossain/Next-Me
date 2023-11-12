import React from 'react';

const SingleBlog = ({params}) => {
    console.log(params)
    return (
        <div>
            <h2>Single Blog</h2>
            <h1>I am dynamic page{params.id}</h1>
        </div>
    );
};

export default SingleBlog;