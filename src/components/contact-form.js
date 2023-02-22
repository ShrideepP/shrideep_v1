import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { MdSend } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    const [data, setData] = useState({name: '', email: '', message: ''});
    const [loading, setLoading] = useState(false);

    const handleName = e => {
        setData({...data, name: e.target.value});
    };

    const handleEmail = e => {
        setData({...data, email: e.target.value});
    };

    const handleMessage = e => {
        setData({...data, message: e.target.value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        axios.post("/api/contact", data)
            .then(response => {
                setData({name: '', email: '', message: ''});
                setLoading(false);
                toast.success('Message Sent Successfully');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='order-1 md:order-2'>
            <Fade triggerOnce>
                <form onSubmit={handleSubmit} className='w-full space-y-4'>
                    <ToastContainer
                        position='bottom-center'
                        theme='light'
                        autoClose={2500}
                    />
                    <div>
                        <label htmlFor='name' className='text-sm text-primary font-barlow-medium'>
                            Full Name
                        </label>
                        <input type="text" id='name' required onChange={handleName} value={data.name} className="w-full py-1 text-base text-compliment font-barlow-semibold border-b-2 border-compliment outline-none bg-transparent" />
                    </div>
                    <div>
                        <label htmlFor='email' className='text-sm text-primary font-barlow-medium'>
                            Email Address
                        </label>
                        <input type="email" id='email' required onChange={handleEmail} value={data.email} className="w-full py-1 text-base text-compliment font-barlow-semibold border-b-2 border-compliment outline-none bg-transparent" />
                    </div>
                    <div>
                        <label htmlFor='message' className='text-sm text-primary font-barlow-medium'>
                            Message
                        </label>
                        <textarea id='message' onChange={handleMessage} rows={3} value={data.message} name='message' required className='w-full py-1 text-base text-compliment font-barlow-semibold border-b-2 border-compliment outline-none bg-transparent resize-none rounded-none' />
                    </div>
                    <div>
                        <button disabled={loading} type='submit' className='w-48 py-3 flex justify-center items-center gap-x-2 hover:gap-x-4 text-white bg-primary hover:bg-secondary rounded'>
                            {
                                loading
                                ?
                                <>
                                    <span className='text-base font-barlow-bold uppercase'>Loading...</span>
                                    <AiOutlineLoading3Quarters className='text-base animate-spin' />
                                </>
                                :
                                <>
                                    <span className='text-base font-barlow-bold uppercase'>Send Message</span>
                                    <MdSend className='text-base' />
                                </>
                            }
                        </button>
                    </div>
                </form>
            </Fade>
        </div>
    );

};

export default ContactForm;