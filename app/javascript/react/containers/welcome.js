import React, { Component } from 'react';
import HomeTile from '../components/HomeTile';
import SlideTile from '../components/SlideTile';
import toplay from '../../../assets/images/toplay.jpg';

class welcome extends Component {

  render() {
    return (
      <div>
      <div className="slider">
      <SlideTile image='https://tcc2-development.s3.amazonaws.com/uploads/artwork/art_photo/18/Image34.png' />
        </div>
        
        <div className="toplay">
          <img src={toplay} height='100vw'/>
          <div className="doers">
            <h2>No matter the tool we support the Artists</h2>
            <p>Whether you like to draw, paint, take photos or sculpt, we are here to showcase your journey.
              For the many forms of cancers there are just as many forms of art and we're here to help share your talents with the world.
            </p>
          </div>
          
        </div>
      <div className="Boxes">
        <div className="row" data-equalizer data-equalize-on="medium">
          <div className="small-4 large-4 columns">
            <HomeTile
              title='Sponsors'
              message='Find out how you can keep this content alive'
            />
          </div>
          <div className="small-4 large-4 columns">

            <HomeTile
              title='Gallery'
              message='See the incredible Art'
            />

          </div>
          <div className="small-4 large-4 columns">
            <HomeTile
              title='How to Help'
              message='Help us showcase more of this incredible work'
            />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default welcome;
