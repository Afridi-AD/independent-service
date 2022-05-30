import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getUTCFullYear();
    return (
        <div className='text-center bg-secondary'>
            <footer >
                <p> <small> copyright @{year} All right reserver by PH </small></p>
            </footer>
        </div>
    );
};

export default Footer;