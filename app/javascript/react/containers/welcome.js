import React, { Component } from 'react';
import HomeTile from '../components/HomeTile';
import toplay from '../../../assets/images/toplay.jpg';
import hero from '../../../assets/images/Colored-Pencils.jpg';

class welcome extends Component {

  render() {
    return (
      <div>
        <div className="hero">
            <img className='hero-image' src={hero} height='80%'/>
          <div className="artists">
            <h2>Where Cancer Patients Become Artists</h2>
            <p>The Cancer Collective is the place for cancer patients and hospitals 
              engaged in art therapy to showcase their artistic talents and works.</p>
              <a href='/artworks'><button className='hero-button red-button'>See The Art</button></a>
          </div>
        </div>
      
        
        {/* <div className="toplay">
          <img src={toplay} height='100vw'/>
          <div className="doers">
            <h2>No matter the tool we support the Artists</h2>
            <p>Whether you like to draw, paint, take photos or sculpt, we are here to showcase your journey.
              Just as there are many forms of cancer, there are just as many forms of art and we're here to help share your talents with the world.
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
      </div> */}
      </div>
    );
  }
}

export default welcome;
