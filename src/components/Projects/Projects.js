import React from 'react'; 
import ProjectCard from '../Resume/ProjectCard';
import './Projects.css';
import ProjectDemo from './ProjectDemo'


const Projects = () => {
    return (
        <main className="container p-5">
            <h1 style={{ fontSize: '50px', fontWeight: '800', color: 'white' }}>MY PROJECTS</h1>
            
            <ProjectCard></ProjectCard> 

            <section className="my-5">
                <ProjectDemo></ProjectDemo> 
            </section>
        </main>


    );
};

export default Projects;