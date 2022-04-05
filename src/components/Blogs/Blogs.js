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
        <div className='py-24'>
            < h3 className='text-center text-3xl font-medium decoration-gray-600 uppercase mb-5' > Our blogs </h3>
            <div className='blog-container container mx-auto grid md:grid-cols-3 gap-5 px-5 md:px-0'>
                {
                    blogData.map(item => <Blog key={item.id} item={item}></Blog>)
                }
            </div >
        </div>
    );
};

export default Blogs;