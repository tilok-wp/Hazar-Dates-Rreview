import React from 'react';
import { LocationMarkerIcon, AtSymbolIcon, InboxInIcon } from '@heroicons/react/solid'


const Footer = () => {
    return (
        <footer className='text-center py-5 bg-slate-900'>
            <p><AtSymbolIcon className="h-5 w-5 text-white inline-block"> </AtSymbolIcon> <a className='text-slate-100 inline-block' href="mailto:companymail@mail.bd"> companymail@mail.bd</a> </p>

            <p className='text-white'> Hajar dates &copy;2022 all right reserved.</p>
        </footer>
    );
};

export default Footer;