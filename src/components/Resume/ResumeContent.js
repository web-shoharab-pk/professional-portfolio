import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Resume.css'
import resumeImg from '../images/resumeImg.png'
import ProjectCard from './ProjectCard';
import ProjectDemo from '../Projects/ProjectDemo';

const ResumeContent = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-4 p-3">
                    <div className="text-center  text-muted personalInfo">
                        <img src={resumeImg} alt="" />
                        <h3 className="fw-bold">Md Shoharab Pk</h3>
                        <h5 className="fw-bold">Web Developer</h5>
                        <div className="  d-flex justify-content-evenly mt-3">
                            <a href="https://github.com/web-shoharab-pk" target="_bland"><FontAwesomeIcon className=" socialAC" icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/shoharabpk/" target="_bland"><FontAwesomeIcon className="socialAC " icon={faLinkedin} /></a>
                            <a href="https://twitter.com/Md_Shoharab_Pk" target="_bland"><FontAwesomeIcon className="socialAC " icon={faTwitterSquare} /></a>
                        </div>
                        <div className="aboutMe text-start mt-3">
                            <h4>ABOUT ME:-</h4>
                            <p>
                                Hello! I am a Web Developer from Bangladesh. I have rich experience in web site design and building, also I am good at javascript and ReactJS. I count myself as a hardworking person. Honesty, hard work, and passion will support me to grow myself & utilize my knowledge and expertise for professional development in the relevant field.
                        </p>
                            <span><strong>Full Name:- </strong> MD Shoharab Pk</span> <br />
                            <span><strong>Address:- </strong> Atrai, Naogaon(6596), Rajshahi</span><br />
                            <span><strong>Phone:- </strong>
                                <a href="tel:+8801797376902" rel="noreferrer" target="_blank">+8801797376902</a>
                            </span><br />
                            <span><strong>Email:- </strong>
                                <a href="mailto:developer.shoharabpk@gmail.com">developer.shoharabpk@gmail.com</a>
                            </span>
                        </div>
                    </div>

                    <div className="myskills mt-3">
                        <h4 className="fw-bold">MY SKILLS:-</h4>
                        <div>
                            <ul>
                                <li><strong>Programming language:</strong> <br /> Javascript (ES6)</li>
                                <li><strong>Comfortable:</strong> <br />
                                 React, MongoDB, NodeJS, Contaxt API, ExpressJS, Firebase, npm</li>
                                <li><strong>Tools:</strong><br />
                                 Git, Chrome dev tool, VS code,  Heroku, Netilfly, Github</li>
                                <li><strong>Familiar:</strong> <br /> Typescript, Redux, Stripe (for payment),  SCSS,  React Native, Yarn</li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="col-md-8 px-5">
                    <h1 className="font-weight-bold indigo-text py-2">Projects</h1>

                    <ProjectCard></ProjectCard>
                    <ProjectDemo></ProjectDemo>
                    <section class="card-body font-weight-bold shadow mt-3 rounded">
                        <h3 class="font-weight-bold indigo-text py-b">Career Objective:</h3>
                        <p class="card-text">
                            I am a web developer. I count myself as a hardworking person. Honesty, hard work,
                            and passion will support me to grow myself & utilize my knowledge and expertise for
                            professional development in the relevant field.
                </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default ResumeContent;