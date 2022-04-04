import React from 'react';

const Blog = (props) => {
    const { blogTitle, description } = props.item
    return (
        <div>
            <h3>{blogTitle}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Blog;