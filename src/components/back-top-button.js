import React from 'react';
import { CgArrowUp } from 'react-icons/cg';
import { Link } from 'react-scroll';

const BackTopButton = () => {
    return (
        <Link to="home" spy={true} smooth={true} duration={500}>
            <button className='w-10 h-10 fixed bottom-5 right-5 grid place-items-center bg-primary hover:bg-secondary rounded'>
                <CgArrowUp className='text-xl text-white' />
            </button>
        </Link>
    );
};

export default BackTopButton;