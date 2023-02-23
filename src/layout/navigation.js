import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';

const Navigation = () => {

    const [navigation, setNavigation] = useState(false);

    return (
        <nav className='navigation w-full horizontal-space flex justify-between items-center'>

            <div style={{backdropFilter: 'blur(2px)', background: 'rgba(0,0,0,.4)'}} className={`w-full h-screen ${navigation?'block':'hidden'} lg:hidden fixed top-0 left-0`}></div>

            <Fade triggerOnce direction='down'>
                <div className='logo-container'>
                    <img src='/logo.png' alt='logo' className='w-12' />
                </div>
            </Fade>

            <div>
                <ul className='hidden lg:flex items-center gap-x-8'>
                    <Fade direction='down' duration={750} cascade triggerOnce>
                        <li>
                            <Link activeClass='active-button' className='text-lg text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='home' spy={true} smooth={true} duration={500} >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='active-button' className='text-lg text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='about' spy={true} smooth={true} duration={500} >
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='active-button' className='text-lg text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='projects' spy={true} smooth={true} duration={500} >
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass='active-button' className='text-lg text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='contact' spy={true} smooth={true} duration={500} >
                                <span>Contact</span>
                            </Link>
                        </li>
                    </Fade>
                </ul>
                <button className='hamburger-button lg:hidden'>
                    <Hamburger color='#17127D' toggled={navigation} toggle={setNavigation} />
                </button>
            </div>

            <div style={{boxShadow: '0 0 12px rgba(0,0,0,.6)'}} className={`${navigation?'w-3/4 md:w-2/4':'w-0'} h-screen flex lg:hidden items-center fixed top-0 right-0 overflow-hidden bg-gray-50`}>
                <ul className='w-full space-y-6 text-center px-4'>
                    <li>
                        <Link activeClass='active-button' className='text-xl text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='home' spy={true} smooth={true} duration={500} >
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass='active-button' className='text-xl text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='about' spy={true} smooth={true} duration={500} >
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass='active-button' className='text-xl text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='projects' spy={true} smooth={true} duration={500} >
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass='active-button' className='text-xl text-dominant hover:text-primary font-barlow-semibold cursor-pointer' to='contact' spy={true} smooth={true} duration={500} >
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );

};

export default Navigation;