import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full min-h-[20vh] grid place-items-center text-center'>
            <Fade triggerOnce>
                <div className='flex items-center justify-center gap-2'>
                    <p className='content'>Made with</p>
                    <FaHeart className='text-secondary' />
                    <p className='content'>by &copy;Shrideep Pakhare</p>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;