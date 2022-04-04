import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='text-center py-48'>
            <h3 className='text-red-700 text-8xl py-5'>404!!!</h3>
            <p className='text-2xl uppercase'>Page not found.</p>
            <Link className='bg-blue-500 hover:bg-blue-800 px-3 py-2 mt-3 text-white  rounded inline-block' to={'/'}>Back to Home</Link>
        </div>
    );
};

export default Notfound;