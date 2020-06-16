import React from 'react';

const HomeTile = (props) => {

  return (
    <div className='HomeTile'>
      <div className='Tileimage'><img src={props.image}/></div>
      <div className='Spacer'></div>
      <div className='TileTitle'> {props.title}</div>
      <div className='TileMessage'> {props.message}</div>

    </div>
  )
}

export default HomeTile;
