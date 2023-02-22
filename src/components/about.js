import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { RiDownload2Fill } from 'react-icons/ri';

const About = () => {

    return (

        <section id='about' className='w-full h-fit horizontal-space vertical-space'>

            <div className='mb-4 md:mb-8 lg:mb-12 text-center'>
                <Fade cascade direction='up' duration={750} triggerOnce>
                    <span className='sub-heading'>About Me</span>
                    <h2 className='heading2 mb-4'>My Introduction</h2>
                    <hr className='w-28 h-[2.5px] mx-auto border-0 bg-primary rounded' />
                </Fade>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center column-gap row-gap'>

                <div>
                    <Fade triggerOnce>
                        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' alt='my-photo' className='w-full h-80 mx-auto object-cover object-center rounded' />
                    </Fade>
                </div>

                <div className='space-y-4'>
                    <Fade cascade duration={750} triggerOnce>
                        <p className='content'>
                            Hi, there my name is Shrideep, and I'm a MERN stack developer with a passion for building beautiful and user-friendly interfaces. As a curious and dedicated learner, I'm always excited to explore new technologies and expand my skill set.
                        </p>
                        <p className='content'>
                            Currently, I'm pursuing a diploma in computer science, and I'm excited to see where my career in software development takes me. Check out my portfolio to see some of my recent projects and get in touch to collaborate on your next project!
                        </p>
                        <a href='/document/cv.pdf' download>
                            <button className='w-40 py-3 flex justify-center items-center gap-x-2 text-white bg-primary hover:bg-secondary rounded'>
                                <span className='text-base font-barlow-bold uppercase'>Download CV</span>
                                <RiDownload2Fill className='text-base' />
                            </button>
                        </a>
                    </Fade>
                </div>

            </div>

        </section>

    );

};

export default About;