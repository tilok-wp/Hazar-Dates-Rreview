import React from 'react';

const Blog = (props) => {
    const { blogTitle, description } = props.item
    return (
        <div className='p-5 bg-slate-100 rounded-lg border-l-4 border-blue-300'>
            <h3 className='text-3xl mb-3'>{blogTitle}</h3>
            <p>{description}</p>
            <h3>pppp</h3>
        </div>
    );
};

export default Blog;