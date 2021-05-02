import React from 'react';
import './Projects.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {   MDBBtn } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBView } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import pd1 from '../images/pd1.png';
import pd2 from '../images/pd2.png';
import pd3 from '../images/pd3.png';
import pd4 from '../images/pd4.png';

const ProjectDemo = () => {
    return (
        <MDBRow>
            <MDBCol md='3 mt-3'>
                <MDBCard>
                    <MDBView className="hover-zoom">
                        <MDBCardImage
                            hover
                            overlay='white-light'
                            className='card-img-top'
                            src={pd1}
                            alt='man'
                        />
                    </MDBView>
                    <MDBCardBody cascade className=' '>
                        <MDBCardTitle className='card-title'>
                            <strong>Soccer Leauge</strong>
                        </MDBCardTitle>                     
                        <div className="d-flex justify-content-between mt-3">
                            <a href="https://sport-team-webshoharabpk.netlify.app/" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faEye} /> Preview</MDBBtn>
                            </a>
                            <a href="https://github.com/web-shoharab-pk/Soccer-leauge-app" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faGithub} />Github</MDBBtn>
                            </a>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='3 mt-3'>
                <MDBCard>
                    <MDBView className="hover-zoom">
                        <MDBCardImage
                            hover
                            overlay='white-light'
                            className='card-img-top'
                            src={pd2}
                            alt='man'
                        />
                    </MDBView>
                    <MDBCardBody>
                        <MDBCardTitle className='card-title'>
                            <strong>Food Monster</strong>
                        </MDBCardTitle>                     
                        <div className="d-flex justify-content-between mt-3">
                            <a href="https://web-shoharab-pk.github.io/assignment-5/" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faEye} /> Preview</MDBBtn>
                            </a>
                            <a href="https://github.com/web-shoharab-pk/assignment-5" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faGithub} />Github</MDBBtn>
                            </a>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
             <MDBCol md='3 mt-3'>
                <MDBCard>
                    <MDBView className="hover-zoom">
                        <MDBCardImage
                            hover
                            overlay='white-light'
                            className='card-img-top'
                            src={pd3}
                            alt='man'
                        />
                    </MDBView>
                    <MDBCardBody>
                        <MDBCardTitle className='card-title'>
                            <strong>Slider Creator</strong>
                        </MDBCardTitle>
                        
                        <div className="d-flex justify-content-between mt-3">
                            <a href="https://web-shoharab-pk.github.io/assignment-6/" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faEye} /> Preview</MDBBtn>
                            </a>
                            <a href="https://github.com/web-shoharab-pk/assignment-6" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faGithub} />Github</MDBBtn>
                            </a>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='3 mt-3'>
                <MDBCard>
                    <MDBView className="hover-zoom">
                        <MDBCardImage
                            hover
                            overlay='white-light'
                            className='card-img-top'
                            src={pd4}
                            alt='man'
                        />
                    </MDBView>
                    <MDBCardBody cascade>
                        <MDBCardTitle className='card-title'>
                            <strong>Online Ticket</strong>
                        </MDBCardTitle>
                        
                        <div className="d-flex justify-content-between mt-3">
                            <a href="https://web-shoharab-pk.github.io/online-ticket-counter/" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faEye} /> Preview</MDBBtn>
                            </a>
                            <a href="https://github.com/web-shoharab-pk/online-ticket-counter" target="_blank" rel="noreferrer">
                                <MDBBtn> <FontAwesomeIcon icon={faGithub} />Github</MDBBtn>
                            </a>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

    );
};

export default ProjectDemo;