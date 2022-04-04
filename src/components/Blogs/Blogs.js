import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('blogData.json')
            .then(req => req.json())
            .then(data => setBlogData(data))
    }, [])

    return (

        <div className='blog-container container mx-auto grid md:grid-cols-3 gap-5 py-24 px-5 md:px-0'>
            {
                blogData.map(item => <Blog key={item.id} item={item}></Blog>)
            }
        </div >
    );
};

export default Blogs;