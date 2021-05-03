import React from 'react';  
import './Navbar.css';
import menu from '../../images/menu.png'

const Navbar = () => {
    return (
        <div> 
            <nav className="navbar mt-0 navbar-expand-lg">
                <div className="container-fluid">
                  
                    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <img style={{width: '40px'}} src={menu} alt=""/> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav   mb-2 mb-lg-0">
                            <li className="nav-item my-1 mx-3">
                                <a className="nav-link active navbar-option  px-5" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item my-1 mx-3">
                                <a className="nav-link active navbar-option  px-5" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item my-1 mx-3">
                                <a className="nav-link active navbar-option  px-5" aria-current="page" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item my-1 mx-3">
                                <a className="nav-link active navbar-option  px-5" aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item my-1 mx-3">
                                <a className="nav-link active navbar-option  px-5" aria-current="page" href="#blogs">Blogs</a>
                            </li>
                            <li className="nav-item my-1 mx-3">
                                <a className="nav-link active navbar-option viewResume  px-5" aria-current="page" href="/viewResume">Resume</a>
                            </li>
                        
                        </ul>

                    </div>
                </div>
            </nav>
        
        </div>
    );
};

export default Navbar;