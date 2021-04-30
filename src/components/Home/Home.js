import React from 'react';
import Navbar from './Navbar/Navbar';
import './Home.css';
import mainImg from '../images/mypic1.png';
import video from '../images/homebg-video2.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects'; 

const Home = () => {
    return (
        <main>


            <section style={{ margin: '0', padding: '0' }}>
                <div id="navbar">
                    <Navbar></Navbar>
                </div>
                <video style={{ height: '100%', width: '100%' }} className='videoTag' autoPlay loop muted>
                    <source style={{ height: '90vh' }} src={video} type='video/mp4' />
                </video>
                <div>
                    <div className="mainImg text-center" >
                        <img className="image img-fluid" src={mainImg} alt="" />
                        <h1 style={{ fontSize: '50px', color: '#FB6656', fontWeight: '800', marginTop: '10px' }}>
                            I am a web developer.</h1>

                        <a href="https://drive.google.com/uc?id=13l1V2D3s3-qTQ9ninTZ_0J0Lr0hPNzX9&export=download">
                            <button className="resumeBtn">DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} /></button>
                        </a>
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
        </main>

    );
};

export default Home;