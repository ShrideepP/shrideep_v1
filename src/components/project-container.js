import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ImGithub } from 'react-icons/im';
import { BiLinkExternal } from 'react-icons/bi';
import Image from 'next/image';

const ProjectContainer = ({ name, content, techs, githubRepo, demoLink, imagePath, columnReverse }) => {

    const techUsed = techs.map(tech => (
        <span key={tech} className='text-base font-barlow-semibold text-tirtiary'>
            {tech}
        </span>
    ));

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-y-4 column-gap'>
            <div className={`w-full ${ columnReverse ? "md:order-2" : "md:order-1" }`}>
                <a href={demoLink} target="_blank">
                    <Fade triggerOnce>
                        <div className='project-image w-full h-60 md:h-72 lg:h-80 relative'>
                            <Image
                                src={imagePath}
                                alt="project-image"
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                className='object-top object-cover absolute rounded shadow-lg'
                            />
                        </div>
                    </Fade>
                </a>
            </div>
            <div className={`w-full space-y-4 ${ columnReverse ? "md:order-1 md:text-end" : "md:order-2" }`}>
                <Fade triggerOnce>
                    <h3 className='heading3'>{name}</h3>
                    <div className='inline-block py-2 px-4 md:py-3 md:px-4 lg:py-4 lg:px-8 bg-tirtiary rounded shadow'>
                        <p className='content text-gray-100'>{content}</p>
                    </div>
                    <div className={`flex gap-4 ${ columnReverse ? "md:justify-end" : "md:justify-start" } flex-wrap`}>
                        {techUsed}
                    </div>
                    <div className={`flex gap-4 ${ columnReverse ? "md:justify-end" : "md:justify-start" }`}>
                        { 
                            githubRepo
                            &&
                            <a href={githubRepo} target="_blank">
                                <button className='px-6 py-2 flex items-center gap-2 text-primary hover:text-white text-base font-barlow-semibold tracking-wide bg-transparent hover:bg-secondary border border-primary hover:border-secondary rounded shadow' type='button'>
                                    <span>GitHub</span>
                                    <ImGithub className='text-lg' />
                                </button>
                            </a>  
                        }
                        <a href={demoLink} target="_blank">
                            <button className='px-6 py-2 flex items-center gap-2 text-primary hover:text-white text-base font-barlow-semibold tracking-wide bg-transparent hover:bg-secondary border border-primary hover:border-secondary rounded shadow' type='button'>
                                <span>Visit</span>
                                <BiLinkExternal className='text-lg' />
                            </button>
                        </a>
                    </div>
                </Fade>
            </div>
        </div>
    );

};

export default ProjectContainer;