import React ,{Component} from 'react';

class ArtistTrack extends Component {

    state = {playing: false, audio: null, playinPreviewURl: null};

    playAudio = previewURl => () =>{
        const audio = new Audio(previewURl);
        console.log(this.state);
        if(!this.state.playing) {
            
            audio.play();
            this.setState({playing: true, audio, playinPreviewURl: previewURl});
        }else{
            this.state.audio.pause();

            if(this.state.playinPreviewURl === previewURl){
                this.setState({playing: false});
            }else{
                audio.play();
                this.setState({audio, playinPreviewURl: previewURl});
            }

            
        }
    }

    render() {
        const {tracks} = this.props;
        return(
            <div   class="d-flex justify-content-around flex-wrap" >
                {
                    tracks.map(track =>{
                        const { id, name, album, preview_url} = track;
                        
                        return(
                            <div >
                            <div  class="card" key={id} onClick={this.playAudio(preview_url)}>
                                <img class="card-img-top" id="track-profile-img" src={album.images[0].url} alt='track-img'/>
                                <div class="card-body">
                                    <p class="card-text">{name}</p>
                                </div>
                            </div>
                            
                            </div>
                            
                        )
                    })
                }
            </div>
        )
    }
}


export default ArtistTrack;