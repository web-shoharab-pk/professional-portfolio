import React from 'react';  
import './Navbar.css';
import menu from '../../images/menu.png'

const Navbar = () => {
    return (
        <div> 
            <nav className="navbar mt-0 navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand mx-5" href="/">
                       <span className="webText">
                           Portfolio.
                       </span>
                    </a>
                    <button className="navbar-toggler bg-dark p-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mx-3"><img style={{width: '40px'}} src={menu} alt=""/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center   mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <a className="nav-link active navbar-option px-5" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link active navbar-option px-5" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link active navbar-option px-5" aria-current="page" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item mx-5 ">
                                <a className="nav-link active navbar-option px-5" aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item mx-5 ">
                                <a className="nav-link active navbar-option  px-5" aria-current="page" href="#blogs">Blogs</a>
                            </li>
                            <li className="nav-item mx-5 ">
                                <a className="nav-link active navbar-option viewResume  px-3" aria-current="page" href="/viewResume">View Resume</a>
                            </li>
                        
                        </ul>

                    </div>
                </div>
            </nav>
        
        </div>
    );
};

export default Navbar;