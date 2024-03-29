import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const SocialHandle = () => {
    return (
        <div className='hidden lg:flex flex-col gap-4 items-center fixed bottom-0 left-5'>
            <a href='https://www.linkedin.com/in/shrideep-pakhare-8577b9267/' target="_blank">
                <button className='text-primary hover:text-secondary hover:-translate-y-1 text-xl'>
                    <FiLinkedin />
                </button>
            </a>
            <a href='https://github.com/ShrideepP/' target="_blank">
                <button className='text-primary hover:text-secondary hover:-translate-y-1 text-xl'>
                    <FiGithub />
                </button>
            </a>
            <a href='https://www.instagram.com/_shrideep/' target="_blank">
                <button className='text-primary hover:text-secondary hover:-translate-y-1 text-xl'>
                    <FiInstagram />
                </button>
            </a>
            <hr className='w-[2px] h-28 border-0 bg-primary rounded' />
        </div>
    );
};

export default SocialHandle;