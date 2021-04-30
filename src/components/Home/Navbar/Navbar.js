import React from 'react';
// import logo from '../../images/logo.jpg';
import './Navbar.css'

const Navbar = () => {
    return (
        <div> 
            <nav class="navbar mt-0 navbar-expand-lg navbar-light  container ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#/">
                        {/* <img style={{width: '150px'}} src={logo} alt=""/> */}
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-5">
                                <a class="nav-link active navbar-option " aria-current="page" href="#/">Home</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active navbar-option " aria-current="page" href="#about">About</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active navbar-option " aria-current="page" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active navbar-option " aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active navbar-option " aria-current="page" href="#/">Blogs</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active navbar-option " aria-current="page" href="#/">View Resume</a>
                            </li>
                            {/* <li class="nav-item me-5">
                                <a class="nav-link active" aria-current="page" href="#/">
                                    <button>Download Resume</button>
                                </a>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;