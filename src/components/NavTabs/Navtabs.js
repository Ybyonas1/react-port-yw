import React from 'react';
import '../pages/Home/assets/home.css';

function Navtabs({ handlePageChange }) {
    return (
        <div className="container-fluid" id="navTabs">
            <div className="row text-white bg-black py-1">
                <h1 className="col aboutM mx-4">Yonas Woldemichael</h1>
                <div className="col d-flex flex-row-reverse align-items-end">
                    <a href="#resume" onClick={() => handlePageChange('Resume')} className="p-3 aboutMe text-decoration-none text-white">Resume</a>
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className="p-3 aboutMe text-decoration-none text-white">Contact Me</a>
                    <a href="#projects" onClick={() => handlePageChange('Projects')} className="p-3 aboutMe text-decoration-none text-white">Projects</a>
                    <a hred="#home" onClick={() => handlePageChange('Home')} className="p-3 aboutMe text-decoration-none text-white">Home</a>
                </div>
            </div>
        </div>
    )
}

export default Navtabs;