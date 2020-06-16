import React, { Component } from 'react';

class Story extends Component {
  render(){
    return(
      <div>
      <div className="story">
      <h3 className="story">The story behind The Cancer Collective</h3>
      <p>The Cancer Collective is the platform for Cancer hospitals and patients
      engaged in art therapy to showcase their artistic talents and works.
      <br/>
      As art lovers we discovered that one of the problems was that art created
      in art therapy programs never got displayed outside the building they were
      created in at best. We wanted to build a way for that art to be shown to
      the entire world.</p>
      <h3 className="story">Art enables us to find ourselves…</h3>
      <p>It’s not uncommon to lose your way, when life doesn’t go as you plan.
      Through art we often find parts of ourselves we didn’t even know were there
      to begin with, we discover how we feel about something we have heard or seen.  
      </p>
      </div>
      <div className="bspacer">
      </div>
      </div>
    );
  }
}

export default Story;
