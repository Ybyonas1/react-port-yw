import React from 'react';
import blank from '../../images/blank.png';
import './home.css';


export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row mt-5 mx-4">
                <div className="col-8 text-white">
                    <h1>Hey there! I'm Yonas</h1>
                    <p className="mt-4 text-white">
                        Welcome to my Portfolio! I am a recent gradute of UNCC"s Coding Bootcamp at the Univeristy of North Carolina at Charlotte who enjoys a challenge, problem solving and logical thinking. Upon graduation from the Coding Bootcamp in early February, I will be looking to continue to grow my skills while also be in search of a Full-Time Software Engineering Developer position hopefully in the Charlotte, NC area. I look forward to adding immediate value to a company.</p>

                    <br />
                    <p> Some of my technical skills include JavaScript, React, MERN, HTML, CSS, NodeJS, MySQL, MongoDB, API’s, OOP, Test Driven Development, Model View Controller, and Git flow. </p>
                    <br />
                    <p> Fun facts: I am born and rasied in Charlotte, NC, I enjoy hiking, playing basketball, and spending time with friends and family.
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yonas-woldemichael-47a794225/"> <i className="fab display-3 text-white mx-4 fa-linkedin"></i> </a>
                    <a href="mailto:ybyonas@gmail.com"> <i className="fas display-3 text-white mx-4 fa-envelope-square"></i> </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ybyonas1" > <i className="fab display-3 mx-4 text-white text-white fa-github-square"></i> </a>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <img src={blank} className="profileP" alt="port-picture" />
                </div>
            </div>
        </div>
    );
}
