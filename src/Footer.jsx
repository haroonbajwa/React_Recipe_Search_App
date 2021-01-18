import React from 'react';
import {NavLink} from 'react-router-dom';


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <>
        <p className="footer text-center py-3">
            © CopyRight {currentYear} Recipe Search App | Powered By: <a href="https://www.facebook.com/haroonbajwa99/" target="_blank" >Haroon Bajwa</a>
        </p>
        </>
    );
}

export default Footer;