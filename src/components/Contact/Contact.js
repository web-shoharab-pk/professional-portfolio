import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';

const Contact = () => {

    return (
        <main className="container">
            <h1 style={{ fontSize: '60px', fontWeight: '800', padding: '20px 10px', color: '#68E0CF' }}>CONTACT</h1>
            <div className="row">
                <div style={{color: '#68E0CF', fontSize: '20px'}} className="col-md-6 p-3">

                    <ContactForm></ContactForm>

                </div>

                <div className="col-md-6 p-3">
                    <div className="details">
                        <h1 className="detailsName">Md Shoharab Pk</h1>
                        <h3 style={{ fontSize: '30px', fontWeight: '700', color: '#68E0CF' }}>web developer</h3>

                        <div className="mt-5">
                            <p><span>AGE:</span>  17</p>
                            <p><span>RESIDENCE:</span> BANGLEADESH</p>
                            <p><span>ADDRESS:</span> Naogaon(6596), Rajshahi</p>
                            <p><span>PHONE:</span> +8801797376902</p>
                            <p><span>E-MAIL:</span> developer.shoharabpk@gmail.com</p>
                        </div>


                        <div className="socialAccount d-flex justify-content-evenly mt-5">
                            <a href="https://github.com/web-shoharab-pk" target="_bland"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/shoharabpk/" target="_bland"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                            <a href="https://www.facebook.com/web.shoharabpk/" target="_bland"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                            <a href="https://twitter.com/Md_Shoharab_Pk" target="_bland"><FontAwesomeIcon className="icon" icon={faTwitterSquare} /></a>

                        </div>
                    </div>

                </div>
            </div>


            <p style={{ color: '#68C68F', textAlign: 'center', marginTop: '20px', margin: ' 0', padding: '20px' }}> Copyright © All Rights Reserved By <span className="text-light">web shoharab pk</span> {new Date().getFullYear()}</p>
        </main>
    );
};

export default Contact;