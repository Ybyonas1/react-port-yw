import React from 'react';
import './pages/home.css';

function Navtabs() {
    return (
        <div className="container-fluid">
            <div className="row text-white bg-black py-1">
                <h1 className="col mx-4">Yonas Woldemichael</h1>
                <div className="col d-flex flex-row-reverse align-items-end">
                    <a className="p-3 text-decoration-none text-white">Resume</a>
                    <a className="p-3 text-decoration-none text-white">Contact Me</a>
                    <a className="p-3 text-decoration-none text-white">Projects</a>
                    <a className="p-3 text-decoration-none text-white">Home</a>
                </div>
            </div>
        </div>
    )
}


export default Navtabs;
