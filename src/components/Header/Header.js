import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='md:flex justify-between mx-1 md:mx-8'>
            <div><h1>Hajar dates</h1></div>
            <nav>
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/reviews'}>Reviews</Link>
                    <Link to={'/dashboard'}>Dashboard</Link>
                    <Link to={'/blogs'}>Blogs</Link>
                    <Link to={'/about'}>About</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;