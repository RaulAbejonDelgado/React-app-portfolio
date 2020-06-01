import React, {Component} from 'react';
import Artist from './Artist';
import ArtistTrack from './ArtistTracks';


const API_ADDRESS = "https://cors-anywhere.herokuapp.com/https://spotify-api-wrapper.appspot.com/artist/";

class SportySearch extends Component {

    state = { artistQuery: '', artistData: '', artistsTracks: [] };

    updateArtistQuery = event => {
        this.setState({artistQuery:event.target.value });
    }

    handleKeyPress = event => {
        if(event.key === 'Enter') {
            this.searchArtitst();
        }
    }

    searchArtitst = () => {
        fetch(API_ADDRESS+this.state.artistQuery)
        .then(response => response.json())
        .then(data => {
            if(data.artists.total > 0) {
                const artists = data.artists.items[0];
                this.setState({artistData: artists });
                console.log("ARTIST-> ",artists);
            fetch(API_ADDRESS+artists.id+"/top-tracks")
            .then(res => res.json())
            .then(resData =>{
                console.log("TRACKS-> ",resData.tracks);
                this.setState({artistsTracks: resData.tracks});
            })
            .catch(error => alert(error.message));          
            }
            
        })
        .catch(error => alert(error.message)); 
        
    }
    render() {
        console.log("Render:" , this.state);
        return (
            <div>
                <h3>Spoty Search</h3>
                <Artist artist={this.state.artistData} />
                <input 
                    onChange={this.updateArtistQuery}
                    placeholder="Search for an artirst"
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.searchArtitst}>Search</button>
                <h3>Tracks click to preview</h3>
                <ArtistTrack tracks={this.state.artistsTracks}/>
                
            </div>
        )
    }
}

export default SportySearch;