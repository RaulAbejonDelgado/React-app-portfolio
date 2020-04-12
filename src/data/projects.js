import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import giticon from '../assets/project-link.png';

const PROJECTS = [
    {
        id: 1,
        title: 'React PortFolio',
        description: 'A react application descrition',
        link: 'https://github.com/RaulAbejonDelgado/',
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
];

export default PROJECTS;
