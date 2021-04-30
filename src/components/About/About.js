import React from 'react';
import image2 from '../images/mypic2.png';
import './About.css'

const About = () => {
    return (
        <main className="container">
            <h1 className=" mt-5">ABOUT ME</h1>
            <div className="row p-3">
                <div className="col-md-6">
                    <img className="img-fluid" src={image2} alt=""/>
                </div>
                <div className="col-md-6">
                    <p className="mt-3" style={{ fontSize: '18px' }}>
                        Hello! I am Web Developer from Bangladesh. I have rich experience in web site design and building, also I am good at javascript and ReactJS. I love to talk with you about our unique.
                         I count myself as a hardworking person. Honesty, hard work,
                        and passion will support me to grow myself & utilize my knowledge and expertise for
                        professional development in the relevant field.
                    </p>
                   <a href="#contact"><button className="contanctBtn">CONTACT ME</button></a> 
                </div>
            </div>


        </main>
    );
};

export default About;