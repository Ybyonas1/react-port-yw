import React from 'react';
import Card from './Card'
import quiz from './assets/images/quiz.png';
import port from './assets/images/port.png';
import mcr from './assets/images/mcr.png';
import wds from './assets/images/wds.png';
import met from './assets/images/met.png';
import dagjyd from "./assets/images/dagjyd.png";

const projects = [
    {
        name: "Code Quiz",
        img: quiz,
        github: "https://github.com/Ybyonas1/code-quiz-assignment",
        url: "https://ybyonas1.github.io/code-quiz-assignment/",
        description: "A code quiz made with javascript"
    }, {
        name: "Original Porfolio",
        img: port,
        github: "https://github.com/Ybyonas1/portfolio-hw",
        url: "https://ybyonas1.github.io/portfolio-hw/",
        description: "Original portfolio created with HTML & CSS. My first ever project created from scratch"
    }, {
        name: "Movie Critix",
        img: mcr,
        github: "https://github.com/heatedtowel/moviecritix",
        url: "https://heatedtowel.github.io/moviecritix/",
        description: "Generates giphys from the top 250 movies on IMDb"
    },
    {
        name: "Workday Scheduler",
        img: wds,
        github: "https://github.com/Ybyonas1/dream-team-day-planner",
        url: "https://ybyonas1.github.io/dream-team-day-planner/",
        description: "A workday scheduler made with javascript"
    }, {
        name: "Team Profile Generator",
        img: met,
        github: "https://github.com/Ybyonas1/team-profile-gen",
        url: "https://ybyonas1.github.io/team-profile-gen/",
        description: "Adds employees onto a team profile via prompts in the terminal, made with Node.js & TDD"
    }, {
        name: "Dagjy Deck Builder",
        img: dagjyd,
        github: "https://github.com/gluupo/dajgy-deckbuilder",
        url: "https://tranquil-falls-52143.herokuapp.com/",
        description: "Deck building app for Magic: The Gathering"
    }
];

export default function Projects() {
    return (
        <div className="container">
            <div className="row d-flex mt-4 justify-content-evenly">
                {projects.map(proj => <Card project={proj} />)}
            </div>
        </div>
    )
}