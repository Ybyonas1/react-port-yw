import React from 'react';
import Project from '../Project'
import blank from '../../images/blank.png';
import quiz from '../../images/quiz.png';
import port from '../../images/port.png';
import mcr from '../../images/mcr.png';
import wds from '../../images/wds.png';
import met from '../../images/met.png';

const projects = [
    {
        name: "Code Quiz",
        img: quiz,
        github: "https://github.com/Ybyonas1/code-quiz-assignment",
        description: "A code quiz made with javascript"
    }, {
        name: "Original Porfolio",
        img: port,
        github: "https://github.com/Ybyonas1/portfolio-hw",
        description: "Original portfolio created with HTML & CSS. My first ever project created from scratch"
    }, {
        name: "Movie Critix",
        img: mcr,
        github: "https://github.com/heatedtowel/moviecritix",
        description: "Generates giphys from the top 250 movies on IMDb"
    }, {
        name: "Workday Scheduler",
        img: wds,
        github: "https://github.com/Ybyonas1/dream-team-day-planner",
        description: "A workday scheduler made with javascript"
    }, {
        name: "Team Profile Generator",
        img: met,
        github: "https://github.com/Ybyonas1/team-profile-gen",
        description: "Adds employees onto a team profile via prompts in the terminal, made with Node.js & TDD"
    }, {
        name: "Capstone Project (Coming Soon...)",
        img: blank,
        github: "https://www.github.com",
        description: "coming soon"
    }
];

export default function Projects() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-evenly">
                {projects.map(proj => <Project project={proj} />)}
            </div>
        </div>
    )

}