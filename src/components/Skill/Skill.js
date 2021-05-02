import React,{ useEffect } from 'react';
import './Skill.css';
import Aos from "aos";
import "aos/dist/aos.css"; 


const Skill = () => {

    useEffect(() => {
        Aos.init({duration: 3000}) 
    },[])

    return (
        <main className="container mt-5">
            <h1 style={{ fontSize: '50px', fontWeight: '800', padding: '20px 10px' }}>MY CODING SKILLS</h1>

            <section className="row py-5 ">
   
                    <div className="col-md-3 py-3   col-sm-6 ">
                        <div data-aos="flip-right" className="cart ">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>65<span>%</span></h2>
                                </div>
                                <h2 className="text">Reactjs</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 py-3  col-sm-6">
                        <div data-aos="flip-right" className="cart ">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>50<span>%</span></h2>
                                </div>
                                <h2 className="text">nodejs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 col-sm-6">
                        <div data-aos="flip-right" className="cart ">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>60<span>%</span></h2>
                                </div>
                                <h2 className="text">expressjs</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 py-3  col-sm-6">
                        <div data-aos="flip-right" className="cart ">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>60<span>%</span></h2>
                                </div>
                                <h2 className="text">mongodb </h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 py-3 col-sm-6">
                        <div data-aos="flip-right" className="cart">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>70<span>%</span></h2>
                                </div>
                                <h2 className="text">Javascript </h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 py-3 col-sm-6">
                        <div data-aos="flip-right" className="cart">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>75<span>%</span></h2>
                                </div>
                                <h2 className="text">Bootstrap</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 py-3  col-sm-6">
                        <div data-aos="flip-right" className="cart">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>80<span>%</span></h2>
                                </div>
                                <h2 className="text">CSS</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 py-3  col-sm-6 ">
                        <div data-aos="flip-right" className="cart  ">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>85<span>%</span></h2>
                                </div>
                                <h2 className="text">HTML</h2>
                            </div>
                        </div>
                    </div>
                
            </section>
        </main>
    );
};

export default Skill;