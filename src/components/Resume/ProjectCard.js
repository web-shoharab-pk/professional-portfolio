import React, { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBView } from 'mdbreact';
import Aos from "aos";
import "aos/dist/aos.css";

import imagea from '../images/dental-hospital.png';
import imageb from '../images/internetservice.png';
import imagec from '../images/family-restauren.png';
import { useEffect } from 'react';

const ProjectCard = () => {
    const [showShowa, setShowShowa] = useState(false);
    const [showShowb, setShowShowb] = useState(false);
    const [showShowc, setShowShowc] = useState(false);

    const [showShowaa, setShowShowaa] = useState(false);
    const [showShowba, setShowShowba] = useState(false);
    const [showShowca, setShowShowca] = useState(false);

    const toggleShowa = () => setShowShowa(!showShowa);
    const toggleShowb = () => setShowShowb(!showShowb);
    const toggleShowc = () => setShowShowc(!showShowc);

    const toggleShowaa = () => setShowShowaa(!showShowaa);
    const toggleShowba = () => setShowShowba(!showShowba);
    const toggleShowca = () => setShowShowca(!showShowca);

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <MDBRow>
            <MDBCol data-aos="fade-right" md='4 mt-3'>
                <MDBCard wide cascade>
                    <MDBView cascade className="hover-zoom">
                        <MDBCardImage
                            hover
                            overlay='white-slight'
                            className='card-img-top'
                            src={imageb}
                            alt='Card cap'
                        />
                    </MDBView>

                    <MDBCardBody>
                        <MDBCardTitle className='card-title'>
                            <strong>Internet Service</strong>
                        </MDBCardTitle>
                        <div className="d-flex FeaturesBtn justify-content-between align-items-center">
                            <MDBBtn className="mt-3" onClick={toggleShowa}>Features</MDBBtn>
                            <MDBBtn className="mt-3" onClick={toggleShowaa}>Technology</MDBBtn>
                        </div>

                        <MDBCollapse show={showShowa}>
                            <strong>Features:</strong>
                            <ul>
                                <li>Customer can buy any services, </li>
                                <li>Customer can payment with stripe method,</li>
                                <li>Customer can check his all orders,</li>
                                <li>Admin can add service,  </li>
                                <li>Admin can delete service,</li>
                                <li>Admin can change service status,</li>
                                <li>Admin can add an admin,</li>
                                <li>Admin have an extra dashboard and only admin can access this dashboard</li>
                            </ul>
                        </MDBCollapse>
                        <MDBCollapse show={showShowaa}>
                            <strong>Technology Used:</strong>
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
                        </MDBCollapse>
                        <div className="d-flex justify-content-between mt-3">
                            <a href="https://internet-service-f1fbf.web.app/" target="_blank" rel="noreferrer">
                                <MDBBtn><FontAwesomeIcon icon={faEye} /></MDBBtn>
                            </a>
                            <a href="https://github.com/web-shoharab-pk/internet-service" target="_blank" rel="noreferrer">
                                <MDBBtn><FontAwesomeIcon icon={faGithub} /></MDBBtn>
                            </a>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol data-aos="fade-down" md='4 mt-3'>
                <MDBCard narrow>
                    <MDBView cascade className="hover-zoom">
                        <MDBCardImage
                            hover
                            overlay='white-slight'
                            className='card-img-top'
                            src={imagea}
                            alt='food'
                        />
                    </MDBView>

                    <MDBCardBody>


                        <MDBCardTitle className='font-weight-bold'>
                            Dental Hospital
                         </MDBCardTitle>
                         <div className="d-flex FeaturesBtn justify-content-between align-items-center">
                         <MDBBtn className="mt-3" onClick={toggleShowb}>Features</MDBBtn>
                        <MDBBtn className="mt-3" onClick={toggleShowba}>Technology</MDBBtn>
                        </div>
                        
                        <MDBCollapse show={showShowb}>
                            <strong>Features:</strong>
                            <ul>
                                <li>Patients can book an appointment,</li>
                                <li>Patients can review on the doctor,</li>
                                <li>patients can log in with google.</li>
                                <li>admin have an extra dashboard and only admin can access admin dashboard</li>
                                <li>Admin can add doctor,</li>
                                <li>Doctor can check any appoinment by appoinment date.</li>
                            </ul>
                        </MDBCollapse>
                        <MDBCollapse show={showShowba}>
                            <strong>Technology Used:</strong>
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
                        </MDBCollapse>
                        <div className="d-flex justify-content-between mt-3">
                            <a href="https://dental-hospital-19008.web.app/" target="_blank" rel="noreferrer">
                                <MDBBtn><FontAwesomeIcon icon={faEye} /></MDBBtn>
                            </a>
                            <a href="https://github.com/web-shoharab-pk/doctors-portal" target="_blank" rel="noreferrer">
                                <MDBBtn><FontAwesomeIcon icon={faGithub} /></MDBBtn>
                            </a>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>


            <MDBCol data-aos="fade-left" md='4 mt-3'>
                <MDBCard>
                    <div className="hover-zoom">
                        <MDBCardImage
                            hover
                            overlay='white-light'
                            className='card-img-top'
                            src={imagec}
                            alt='man'
                        />
                    </div>
                    <MDBCardBody cascade className=' '>
                        <MDBCardTitle className='card-title'>
                            <strong>Family Restaurant</strong>
                        </MDBCardTitle>
                        <div className="d-flex FeaturesBtn justify-content-between align-items-center">
                        <MDBBtn className="mt-3" onClick={toggleShowc}>Features</MDBBtn>
                        <MDBBtn className="mt-3" onClick={toggleShowca}>Technology</MDBBtn>
                        </div>
                      
                        <MDBCollapse show={showShowc}>
                            <strong>Features:</strong>
                            <ul>
                                <li>User can order food, </li>
                                <li>User can payment with stripe,</li>
                                <li>User can check his all orders,</li>
                                <li>User can log in with google.</li>
                                <li>Admin can add foods</li>
                                <li>Admin can delete foods</li>
                                <li>Admin can check all orders with details</li>
                            </ul>
                        </MDBCollapse>
                        <MDBCollapse show={showShowca}>
                            <strong>Technology Used:</strong>
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
                        </MDBCollapse>
                        <div className="d-flex justify-content-between mt-3">
                            <a href="https://family-restaurent.web.app/" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faEye} /></MDBBtn>
                            </a>
                            <a href="https://github.com/web-shoharab-pk/family-restaurent/" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faGithub} /></MDBBtn>
                            </a> 
                        </div>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </MDBRow>
    )
}

export default ProjectCard;