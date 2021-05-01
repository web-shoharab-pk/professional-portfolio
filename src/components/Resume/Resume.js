import React from 'react';
import './Resume.css'
import ResumeContent from './ResumeContent';

const Resume = () => {
    return (
        <main>
            <nav style={{ width: '200px' }}>
                <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
                    <li style={{ border: '2px solid black', borderRadius: '25px' }} className="nav-item mx-3 mt-3">
                        <a className="nav-link active navbar-home px-5" aria-current="page" href="/">Home</a>
                    </li>
                </ul>
            </nav>

            <section className="container">
                <ResumeContent></ResumeContent>
            </section>




        </main>
    );
};

export default Resume;