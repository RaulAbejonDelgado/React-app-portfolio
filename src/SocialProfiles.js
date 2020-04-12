import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render(){
        const {name, link, image} = this.props.social;
        return(
            
        <div style={{display: 'inline-block', width: 100, margin: 50}}>
        
            <p>{name}</p>
            <a href={link}><img alt="social" src={image} style={{width: 50}}/></a>
        </div>
        )
    }
}

class SocialProfiles extends Component {
    render(){
        return (
            <div style={{textAlign: 'center'}} >
                <div >
                    {
                        SOCIAL_PROFILES.map(SOCIAL => {
                            return(
                                <SocialProfile  key={SOCIAL.id} social={SOCIAL}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;