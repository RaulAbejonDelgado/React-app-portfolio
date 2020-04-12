import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import giticon from '../assets/project-link.png';

const PROJECTS = [
    {
        id: 1,
        title: 'React PortFolio',
        description: 'A react application descrition',
        link: 'https://github.com/RaulAbejonDelgado/React',
        image: project1,
        source: giticon

    },
    {
        id: 2,
        title: 'Spring cloud micro services',
        description: 'Micro services',
        link: 'https://github.com/RaulAbejonDelgado/java/tree/master/micro-servicios',
        image: project2,
        source: giticon
    },
    {
        id: 3,
        title: 'Android',
        description: 'An android repository with examples',
        link: 'https://github.com/RaulAbejonDelgado/android',
        image: project3,
        source: giticon
    },
    {
        id: 4,
        title: 'Angular',
        description: 'Angular pwa',
        link: 'https://raulabejondelgado.github.io/myapp/#/login',
        image: project4,
        source: giticon
    },
    {
        id: 5,
        title: 'Spring framework 5',
        description: 'Deployed on heroku',
        link: 'https://spring-framework-5-app.herokuapp.com/',
        image: project5,
        source: giticon
    }
];

export default PROJECTS;
