import React from 'react';
import blank from '../images/blank.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




export default function Project({ project }) {
    return (
        <div className="card mt-5 bg-transparent border border-white" style={{ width: "18rem" }}>
            {/* How to make 2 rows with 3 colomns?? */}
            <img src={project.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-text text-white">{project.name}</h5>
                <p class="card-text text-center text-white fontsize">{project.description}</p>
                {/* How to display this icon below as a link to github */}
                <i class="fab fa-github"></i>
                <FontAwesomeIcon href={project.github} className="text-white" icon={faCoffee} />
                <i href={project.github}>Github Icon</i>
                {/* How to display this icon as a link to the deployed heroku site */}
                <i class="fas fa-link"></i>
            </div>
        </div>
    )
}