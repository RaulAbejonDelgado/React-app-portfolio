import React , {Component}from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Tittle';
import Covid19 from './Covid19';
import SportySearch from './SpotySearch';


class App extends Component{
    flagState = false;
    state = { displayBio: false};

    // constructor() {
    //     super();
    //     this.flagState = false;
    //     this.state = { displayBio: false};
    //     this.readMore = this.readMore.bind(this);
    // }

    readMore = () => {
        this.flagState = !this.flagState ? this.flagState = true : this.flagState = false;
        this.setState({displayBio: this.flagState});
    }

    render() {
        const bio = this.state.displayBio === false ? (
        <div><button onClick={this.readMore} >Read more</button></div>) : (
            <div>
                <button onClick={this.readMore} >Read less</button>
                <p>There's not much to read </p>                    
            </div>
            
            );

        return(
            <div>
                <img id="profile-img" alt="profile-img" src={profile}/>
                <p>Hello this is my first react app.</p>
                {this.state.displayBio ? <Title/> : null}
                <p>You can look my angular porfolio <a href="https://raulabejondelgado.github.io/raulcv/#/home" target="_blank">Angular portflio</a></p>
                <Title/>
                {bio}
                <hr/>
                <SportySearch/>
                <hr/>
                
                <Covid19/>
                <hr/>
                <Projects />
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}
export default App;
