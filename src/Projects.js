import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render(){
        console.log('this.props', this.props);
        
        const {title, image, description, link, source} = this.props.project;

        // const title = this.props.project.title;
        // const image = this.props.project.image;

        return (
            <div style={{display: 'inline-block', width: 350, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt="profile"  style={{width: 200, height: 200} } />
            <p>{description}</p>
            <a href={link} target="_blank"><img alt="source" src={source}/></a>
            </div>
        )
    }
}

class Projects extends Component {
    render(){
        return (
            <div>
                <h2>
                    Projects
                </h2>
                <div>
                    <div>{PROJECTS[0].title}</div>
                    <div>{PROJECTS[1].title}</div>
                    <div>{PROJECTS[2].title}</div>
                </div>
                <hr/>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project  key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;