import React from 'react';
import ContactDetails from './contact-details';
import ContactForm from './contact-form';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    return (
        <section id='contact' className='w-full h-fit horizontal-space vertical-space'>
            <div className='mb-4 md:mb-8 lg:mb-12 text-center'>
                <Fade cascade direction='up' duration={750} triggerOnce>
                    <span className='sub-heading'>Contact Me</span>
                    <h2 className='heading2 mb-4'>Let's Work Together</h2>
                    <hr className='w-28 h-[2.5px] mx-auto border-0 bg-primary rounded' />
                </Fade>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center row-gap column-gap'>
                <ContactDetails />
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;