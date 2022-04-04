import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <header className='container mx-auto sticky top-0 md:flex justify-between text-center py-3 '>
            <div><h1 className='text-3xl'> <strong className='text-blue-400'>Hajar</strong>  dates</h1></div>
            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/reviews'}>Reviews</CustomLink>
                <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>

            </nav>
        </header>
    );
};

export default Header;