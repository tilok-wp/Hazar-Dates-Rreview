import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <header className='text-center py-5 bg-slate-50 sticky top-0 z-10'>
            <div className='container mx-auto md:flex justify-between'>
                <div><h1 className='text-3xl'> <strong className='text-blue-400'>Hajar</strong>  Dates</h1></div>
                <nav >
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/reviews'}>Reviews</CustomLink>
                    <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
                    <CustomLink to={'/blogs'}>Blogs</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                </nav>

            </div>
        </header>
    );
};

export default Header;