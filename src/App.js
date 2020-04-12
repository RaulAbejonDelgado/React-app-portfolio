import React , {Component}from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

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
                <h1>React portfolio</h1>
                <p>Hello this is my first react app.</p>
                <p>You can look my angular porfolio <a href="https://raulabejondelgado.github.io/raulcv/#/home" target="_blank">Angular portflio</a></p>
                {bio}
                <hr/>
                <Projects />
                <SocialProfiles/>
            </div>
        )
    }
}
export default App;
