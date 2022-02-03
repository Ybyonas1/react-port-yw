import React from 'react';
import blank from '../images/blank.png';





export default function Project({ project }) {
    return (
        <div className="card mt-5 bg-transparent border border-white" style={{ width: "18rem", backgroundImage: `url(${project.img})` }}>
            {/* How to make 2 rows with 3 colomns?? */}
            {/* <img src={project.img} className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-text text-white">{project.name}</h5>
                <p className="card-text text-center text-white fontsize">{project.description}</p>
                {/* How to display this icon below as a link to github */}
                <p className="text-center">
                    <a target="_blank" rel="noopener noreferrer" href={project.github}> <i className="fab mx-2 h1 text-white fa-github"></i></a>
                    {/* How to display this icon as a link to the deployed heroku site */}
                    <a> <i className="fas h2 text-white fa-link"></i></a>
                </p>
            </div >
        </div >
    )
};