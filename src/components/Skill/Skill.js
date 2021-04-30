import React from 'react';
import './Skill.css';
import skillImg from '../images/303-removebg-removebg-preview.png'

const Skill = () => {
    return (
        <main className="container mt-5">
            <h1 style={{ fontSize: '60px', fontWeight: '800', padding: '20px 10px' }}>MY SKILLS</h1>
            <div className="toolsList">
                <h1>Tools</h1>
                <ul>
                    <li>
                        <h4>Git</h4>
                    </li>
                    <li>
                        <h4>Github</h4>
                    </li>
                    <li>
                        <h4>Netlify</h4>
                    </li>
                    <li>
                        <h4>Firebase</h4>
                    </li>
                    <li>
                        <h4>Heroku</h4>
                    </li>
                    <li>
                        <h4>Visual Studio Code</h4>
                    </li>
                </ul>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="skills">
                        <h1>My coding Skills</h1>
                        <ul className="skillList">
                            <li>

                            </li>
                            <h3>HTML5</h3><span className="skillBar"><span className="html"></span> </span>
                            <li>

                            </li>
                            <h3>CSS</h3><span className="skillBar"><span className="css"></span> </span>
                            <li>

                            </li>
                            <h3>Bootstrap</h3><span className="skillBar"><span className="bootstrap"></span> </span>
                            <li>

                            </li>
                            <h3>Javascript</h3><span className="skillBar"><span className="javascript"></span> </span>
                            <li>

                            </li>
                            <h3>ReactJS</h3><span className="skillBar"><span className="reactjs"></span> </span>
                            <li>

                            </li>
                            <h3>NodeJS</h3><span className="skillBar"><span className="nodejs"></span> </span>
                            <li>

                            </li>
                            <h3>ExpressJS</h3><span className="skillBar"><span className="expressjs"></span> </span>
                            <li>

                            </li>
                            <h3>MongoDB</h3><span className="skillBar"><span className="mongo"></span> </span>

                        </ul>



                    </div>
                </div>
                <div className="col-md-6 py-5 px-3">
                    <img className="img-fluid" src={skillImg} alt="" />
                </div>
            </div>
        </main>
    );
};

export default Skill;