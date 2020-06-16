import React from 'react';
import { Link } from 'react-router-dom';


const ArtTile = (props) => {

  return (
    <div className='ArtTile' onClick={props.click}>
      <Link to={`/artworks/${props.id}`}>
      <div className='ArtImagesm'><img src={props.image} /></div>
      <div className='Spacer'></div>
      <div className='ArtistName'>{props.first_name} {props.last_initial}</div>
      <div className='Title'><b>Title:</b>{props.title}</div>
      <div><p><b>Hospital:</b> {props.hospital}</p></div>
      </Link>

    </div>
  )
}

export default ArtTile;
