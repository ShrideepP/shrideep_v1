import React, { useEffect } from 'react';
import Head from 'next/head';
import Navigation from './navigation';
import Footer from './footer';
import BackTopButton from '@/components/back-top-button';
import SocialHandle from '@/components/social-handle';

const Layout = ({ children }) => {

    useEffect(() => {

        const home = document.getElementById("home");
        const navigationMenu = document.querySelector(".navigation");

        const watchHome = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    navigationMenu.classList.remove("scrolled");
                } else {
                    navigationMenu.classList.add("scrolled");
                };
            });
        });

        watchHome.observe(home);

    }, [])

    return (
        <div className='bg-background'>
            <Head>
                <title>Shrideep Pakhare - MERN Developer</title>
                <meta name='description' content='' />
            </Head>

            <Navigation />

            <main>
                { children }
            </main>

            <BackTopButton />

            <SocialHandle />

            <Footer />
        </div>
    );
};

export default Layout;