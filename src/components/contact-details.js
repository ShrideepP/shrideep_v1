import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { MdLocationPin, MdLocalPhone, MdMail } from 'react-icons/md';

const ContactDetails = () => {
    return (
        <div className='contact-details order-2 md:order-1 space-y-8 lg:space-y-12 p-4 md:p-6 lg:p-8 overflow-hidden bg-tirtiary rounded'>
            <Fade duration={750} cascade triggerOnce>
                
                <div className='relative space-y-2 z-50'>
                    <h3 className='heading3 text-white'>Contact Information</h3>
                    <p className='content text-gray-100'>
                        I would love to hear from you! Fill out the form or contact us via email or phone to get in touch.
                    </p>
                </div>

                <div className='relative space-y-4 z-50'>
                    <div>
                        <button type='button' className='flex items-center gap-x-6 cursor-default'>
                            <MdLocationPin className='text-white' />
                            <span className='text-base text-gray-200 hover:text-white font-barlow-semibold'>
                                Belgaum, Karnataka, India
                            </span>
                        </button>
                    </div>
                    <div>
                        <a href='tel:+917618722409'>
                            <button type='button' className='flex items-center gap-x-6'>
                                <MdLocalPhone className='text-white' />
                                <span className='text-base text-gray-200 hover:text-white hover:underline font-barlow-semibold'>
                                    +91 76187 22409
                                </span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href='mailto:shrideeppakhare2005@gmail.com'>
                            <button type='button' className='flex items-center gap-x-6'>
                                <MdMail className='text-white' />
                                <span className='text-base text-gray-200 hover:text-white hover:underline font-barlow-semibold'>
                                    shrideeppakhare2005@gmail.com
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className='relative flex items-center gap-x-2 z-50'>
                    <a href='https://www.linkedin.com/in/shrideep-pakhare-8577b9267/' target="_blank">
                        <button className='w-10 h-10 grid place-items-center text-white bg-transparent hover:bg-secondary rounded-full'>
                            <FiLinkedin />
                        </button>
                    </a>
                    <a href='https://github.com/ShrideepP/' target="_blank">
                        <button className='w-10 h-10 grid place-items-center text-white bg-transparent hover:bg-secondary rounded-full'>
                            <FiGithub />
                        </button>
                    </a>
                    <a href='https://www.instagram.com/_shrideep/' target="_blank">
                        <button className='w-10 h-10 grid place-items-center text-white bg-transparent hover:bg-secondary rounded-full'>
                            <FiInstagram />
                        </button>
                    </a>
                </div>

            </Fade>
        </div>
    );
};

export default ContactDetails;