import React from 'react';

const myart = (props) => {

  return(

    <div className='ArtistUploads'><img className="myartimage" src={props.image}/> {props.first_name} {props.last_name}, {props.title}</div>
  )
}

export default myart;
