import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ProjectContainer from './project-container';

const Projects = () => {
    return (
        <section id='projects' className='w-full h-fit vertical-space horizontal-space'>

            <div className='mb-8 lg:mb-12 text-center'>
                <Fade cascade direction='up' duration={750} triggerOnce>
                    <span className='sub-heading'>My Work</span>
                    <h2 className='heading2 mb-4'>Things I've Built</h2>
                    <hr className='w-28 h-[2.5px] mx-auto border-0 bg-primary rounded' />
                </Fade>
            </div>

            <div className='w-full flex flex-col row-gap'>
                
                <ProjectContainer 
                    name="Career Forest"
                    content="I created a real-time web app for a career counseling start-up using Next JS and Tailwind CSS. It showcases my front-end development skills and provides a fast, user-friendly interface. The design reflects the start-up's mission for personalized career counseling services." 
                    techs={["Next JS", "Nodemailer", "Tailwind CSS", "SASS"]}
                    demoLink="https://careerforest.in"
                    imagePath="/images/career-forest.png"
                    columnReverse={true}
                />
                
                <ProjectContainer 
                    name="CRUD App"
                    content="The Notes App is a simple web application that allows users to create, read, update, and delete notes. The application is built using the MERN stack (MongoDB, Express.js, React, and Node.js)" 
                    techs={["MongoDB", "Express JS", "React JS", "Node JS", "Tailwind CSS"]}
                    githubRepo="https://github.com/ShrideepP/crud-client"
                    demoLink="https://crud-client-three.vercel.app/"
                    imagePath="/images/crud-app.png"
                />

                <ProjectContainer
                    name="Disney+ Clone"
                    content="Disney+ Clone which uses React JS and Tailwind CSS for a modern UI and Firebase for authentication. The website also fetches movie information through an API and displays the latest releases. This showcases my skills in front-end development and use of popular technologies." 
                    techs={["React JS", "Tailwind CSS", "SASS", "Firebase"]}
                    githubRepo="https://github.com/ShrideepP/disney-plus-clone"
                    demoLink="https://disney-clone-chi-eight.vercel.app/"
                    imagePath="/images/disney-clone.png"
                    columnReverse={true}
                />

                <ProjectContainer
                    name="Crypto App"
                    content="An Cryptocurrency App that shows real-time prices using an API and React JS/Tailwind CSS for the UI. It displays a user-friendly interface and demonstrates my front-end development skills and API integration abilities." 
                    techs={["React JS", "Tailwind CSS"]}
                    githubRepo="https://github.com/ShrideepP/crypto-app"
                    demoLink="https://crypto-app-tan.vercel.app/"
                    imagePath="/images/crypto-app.png"
                />

                <ProjectContainer
                    name="Tic Tac Toe"
                    content="A Tic Tac Toe game using React JS and Tailwind CSS. This project showcases my logic building skills and proficiency in front-end development. The clean and user-friendly interface, built with Tailwind CSS, offers a visually appealing and responsive gaming experience." 
                    techs={["React JS", "Tailwind CSS"]}
                    githubRepo="https://github.com/ShrideepP/tic-tac-toe"
                    demoLink="https://tic-tac-toe-murex-zeta.vercel.app/"
                    imagePath="/images/tic-tac-toe.png"
                    columnReverse={true}
                />

            </div>

        </section>
    );
};

export default Projects;