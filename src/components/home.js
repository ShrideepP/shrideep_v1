import React from 'react';
import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { RiSendPlane2Fill } from 'react-icons/ri';

const Home = () => {
    return (
        <section id='home' style={{backgroundImage: 'url("/images/background.png")'}} className='w-full min-h-screen vertical-space horizontal-space relative grid grid-cols-1 md:grid-cols-2 items-center row-gap bg-cover bg-center bg-fixed'>

            <div className='space-y-4'>
                <Fade direction='up' duration={750} cascade triggerOnce>
                    <h1 className="heading1">
                        Shrideep Pakhare.
                    </h1>
                    <span className='text-2xl text-compliment font-barlow-bold'>
                        Web Developer
                    </span>
                    <p className="content">
                        Experienced web developer specialized in MERN stack. Let's create stunning and responsive web applications together!
                    </p>
                    <hr className='w-28 h-[2.5px] border-0 bg-primary rounded' />
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        <button className='w-40 py-3 flex justify-center items-center gap-x-2 hover:gap-x-4 text-white bg-primary hover:bg-secondary rounded'>
                            <span className='text-base font-barlow-bold uppercase'>Hire Me</span>
                            <RiSendPlane2Fill className='text-base' />
                        </button>
                    </Link>
                </Fade>
            </div>

        </section>
    );
};

export default Home;