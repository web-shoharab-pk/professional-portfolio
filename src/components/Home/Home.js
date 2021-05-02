import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import mainImg from '../images/homeImg-removebg-preview.png';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import './Home.css';
import Navbar from './Navbar/Navbar';
import fb from '../images/fb.png';
import tw from '../images/tw.png';
import ig from '../images/ig.png';
import bubbles from '../images/bubble.png';

const Home = () => {
    return (
        <main>
            <section className="hero" style={{ margin: '0', padding: '0' }}>

                <div className="d-flex justify-content-between" >
                    <Navbar></Navbar>
                </div>

                <div className="homePageContent">
                    <div className="text-center text-light" >
                        <img className="img-fluid hompageImg" src={mainImg} alt="" />
                        <div className="webText">
                            Hi There!  I'M SHOHARAB <br />
                            Web Developer                          
                        </div>
                        <a href="https://drive.google.com/uc?id=13l1V2D3s3-qTQ9ninTZ_0J0Lr0hPNzX9&export=download">
                            <button className="resumeBtn">DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} /></button>
                        </a>
                    </div>

                    <div className="side-bar">
                        <div className="social-links">
                            <a href="https://www.facebook.com/web.shoharabpk/" target="_bland"><img src={fb} alt=""></img></a>
                            <a href="https://twitter.com/Md_Shoharab_Pk/" target="_bland"><img src={tw} alt=""></img></a>
                            <a href="https://www.linkedin.com/in/shoharabpk/" target="_bland"> <img src={ig} alt=""></img> </a>
                        </div>
                    </div>
                    <div className="bubbles">
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                    </div>
                </div>
            </section>

            <section id="about">
                <About></About>
            </section>

            <section id="skills">
                <Skill></Skill>
            </section>

            <section id="projects">
                <Projects></Projects>
            </section>

            <section id="blogs">
                <Blog></Blog>
            </section>
            <section id="contact">
                <Contact></Contact>
            </section>
        </main>

    );
};

export default Home;