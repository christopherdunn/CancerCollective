import React from 'react';
import { Link } from 'react-router-dom';


const ArtTile = (props) => {
      const isAnonymous = props.anonymous;
      let artist;
      
      if(isAnonymous){
        artist= "Anonymous";
      }else {
        artist= props.first_name +' '+ props.last_initial.charAt(0)+'.';
       }

  return (
    <div className='ArtTile' onClick={props.click}>
      <Link to={`/artworks/${props.id}`}>
      <div className='ArtImagesm'><img src={props.image} /></div>
      <div className='Spacer'></div>
      <div className='ArtistName'>{artist}</div>
      <div className='Title'><b>Title:</b>{props.title}</div>
      <div><p><b>Hospital:</b> {props.hospital}</p></div>
      </Link>

    </div>
  )
}

export default ArtTile;
