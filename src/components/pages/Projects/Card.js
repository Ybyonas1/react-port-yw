import React from 'react';
import './assets/css/project.css';




export default function Card({ project }) {
    console.log(this);
    return (
        <div className="card flex-grow-1 m-3 col-3 p-5 images bg-transparent border border-white" style={{ backgroundImage: `url(${project.img})` }}>
            {/* How to make 2 rows with 3 colomns?? */}
            {/* <img src={project.img} className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h4 className="card-text cardText text-white">{project.name}</h4>
                <p className="card-text text-center cardText text-white fontsize">{project.description}</p>
                {/* How to display this icon below as a link to github */}
                <p className="text-center">
                    <a target="_blank" rel="noopener noreferrer" href={project.github}> <i className="fab cardText mx-2 icon h1 text-white fa-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href={project.url}> <i className="fas h2 icon text-white fa-link"></i></a>
                </p>
            </div >
        </div >
    )
};