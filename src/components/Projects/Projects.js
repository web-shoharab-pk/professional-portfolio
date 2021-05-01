import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import project2 from '../images/dental-hospital.png';
import project3 from '../images/family-restauren.png';
import project1 from '../images/internetservice.png';
import project4 from '../images/leagues-app.png';
import './Projects.css';


const Projects = () => {
    return (
        <main className="container p-5">
            <h1 style={{ fontSize: '50px', fontWeight: '800', color: 'white' }}>MY PROJECTS</h1>
            <div className="row">
                <div className="col-md-6 p-3">
                    <div className="shadow g-4">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={project1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Internet Service</h3>
                                <div style={{ height: '100px', overflowX: 'scroll', background: 'black', color: 'white' }} className="card-text">
                                    <h3>Features:</h3>
                                    <ul>
                                        <li>Customer can buy any services, customer can payment with stripe method, Customer can review service, Customer can log in with google.  </li>
                                        <li>Admin can add service, Admin can delete service, Admin can add an admin and admin have an extra dashboard and only admin can access admin dashboard etc...</li>
                                    </ul>
                                    <h3>Technology Used: </h3>
                                    <ul>
                                        <li>
                                            <strong>Front-end:</strong> Javascript (ES6), React, Bootstrap, Material UI, HTML, CSS, Contaxt API and many libraries
                                        </li>
                                        <li>
                                            <strong>Back-end:</strong> NodeJS, ExpressJS, Heroku(for deploy)
                                        </li>
                                        <li>
                                            <strong>Database:</strong> MongoDB
                                        </li>
                                        <li>
                                            <strong>Authentication:</strong> Firebase(Authentication and deploy)
                                        </li>                                 
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <a href="https://internet-service-f1fbf.web.app/" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                    </a>
                                    <a href="https://github.com/web-shoharab-pk/internet-service-provider" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faGithub} /> Client</button>
                                    </a>
                                    <a href="https://github.com/web-shoharab-pk/internet-service-provider-server" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faGithub} /> Server</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-3">
                    <div className="shadow g-4">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={project2} className="card-img-top " alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Dental Hospital</h3>
                                <div style={{ height: '100px', overflowX: 'scroll', background: 'black', color: 'white' }} className="card-text">
                                    <h3>Features:</h3>
                                    <ul>
                                        <li>Patients can book an appointment, Patients can review on the doctor, patients can log in with google.</li>
                                        <li>Admin can add doctor and admin have an extra dashboard and only admin can access admin dashboard and doctor have many features </li>
                                    </ul>
                                    <h3>Technology Used: </h3>
                                    <ul>
                                        <li>
                                            <strong>Front-end:</strong> Javascript (ES6), React, Bootstrap, Material UI, Contaxt API and many libraries
                                        </li>
                                        <li>
                                            <strong>Back-end:</strong> NodeJS, ExpressJS, Heroku(for deploy)
                                        </li>
                                        <li>
                                            <strong>Database:</strong> MongoDB
                                        </li>
                                        <li>
                                            <strong>Authentication:</strong> Firebase(Authentication and deploy)
                                        </li>                                 
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <a href="https://dental-hospital-19008.web.app/" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                    </a>
                                    <a href="https://github.com/web-shoharab-pk/doctors-portal-client" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faGithub} /> Client</button>
                                    </a>
                                    <a href="https://github.com/web-shoharab-pk/dental-hospital-server" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faGithub} /> Server</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-3">
                    <div className="shadow g-4">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={project3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Family Restaurant</h3>
                                <div style={{ height: '100px', overflowX: 'scroll', background: 'black', color: 'white' }} className="card-text">
                                    <h3>Features:</h3>
                                    <ul>
                                        <li>User can order food, User can payment with stripe, User can log in with google</li>
                                        <li>Admin can add foods and admin have an extra dashboard and only admin can access admin dashboard and admin have many features</li>
                                    </ul>
                                    <h3>Technology Used: </h3>
                                    <ul>
                                        <li>
                                            <strong>Front-end:</strong> Javascript (ES6), React, Bootstrap, Material UI, Contaxt API and many libraries
                                        </li>
                                        <li>
                                            <strong>Back-end:</strong> NodeJS, ExpressJS, Heroku(for deploy)
                                        </li>
                                        <li>
                                            <strong>Database:</strong> MongoDB
                                        </li>
                                        <li>
                                            <strong>Authentication:</strong> Firebase(Authentication and deploy)
                                        </li>                                 
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <a href="https://family-restaurent.web.app/" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                    </a>
                                    <a href="https://github.com/web-shoharab-pk/family-restaurent" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faGithub} />Github</button>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-3">
                    <div className="shadow g-4">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={project4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Soccer leauge app</h3>
                                <div style={{ height: '100px', overflowX: 'scroll', background: 'black', color: 'white' }} className="card-text">
                                    <h3>Features:</h3>
                                    <ul>
                                        <li>you can check any soccer leauge details</li>
                                    </ul>
                                    <h3>Technology Used: </h3>
                                    <ul>
                                        <li>
                                            Javascript (ES6), React, React Router, Bootstrap, HTML, CSS, Rest API, Netlify(for deploy)
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <a href="https://sport-team-webshoharabpk.netlify.app/" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                    </a>
                                    <a href="https://github.com/web-shoharab-pk/Soccer-leauge-app" target="_blank" rel="noreferrer">
                                        <button className="siteBtn"> <FontAwesomeIcon icon={faGithub} />Github</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>


    );
};

export default Projects;