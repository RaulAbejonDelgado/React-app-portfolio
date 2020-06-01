import React from 'react';

const Artist = ({ artist }) => {
    if(!artist) return null;
    const { images, name, genres, followers} = artist;
     
    return (
        <div>
            <h3>{name}</h3>
            <p>{genres.join(',')}</p>
            <p>Followers: {followers.total}</p>
            <img  id="artist-profile-img"  src={images[0] && images[0].url}/>
        </div>
    )
}

export default Artist;