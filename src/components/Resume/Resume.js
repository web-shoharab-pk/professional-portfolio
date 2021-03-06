import React from 'react';
import './Resume.css'
import ResumeContent from './ResumeContent';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Resume = () => {
    return (
        <main>
            <nav style={{ width: 'content-fit' }}>
                <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0 "> 
               
                <div className="d-flex justify-content-between mt-3">
                <li style={{ border: '1px solid black', borderRadius: '25px' }} className="nav-item bg-info hoverly-xoom">
                        <a className="nav-link active navbar-home px-5" aria-current="page" href="/">Home</a>
                    </li>
                    
                    <li style={{position: 'fixed', right: '10px', zIndex: '1'}} >    
                    <a href="https://drive.google.com/uc?id=13l1V2D3s3-qTQ9ninTZ_0J0Lr0hPNzX9&export=download">
                        <button style={{margin: '0'}} className="resumeBtn">GET RESUME <FontAwesomeIcon icon={faDownload} /></button>
                    </a>
                    </li>
                     
                </div>
                  
                </ul>
            </nav>

            <section>
                <ResumeContent></ResumeContent>
            </section>
         
        </main>
    );
};

export default Resume;