import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artwork: {}
    }
    this.getArtwork = this.getArtwork.bind(this)
  }
  componentDidMount() {
    this.getArtwork();

  }

  getArtwork() {
    let artworkId = this.props.match.params.id
    fetch(`/api/v1/artworks/${artworkId}`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ artwork: json.artwork })
      });
  }

  render() {
    const isAnonymous = this.state.artwork.anonymous;
    let artist;
    
    if(isAnonymous){
      artist= "Anonymous";
    }else {
      artist= this.state.artwork.first_name +' '+ this.state.artwork.last_name;
    }

    const isArtStatement = this.state.artwork.art_statement;
    
    let statement;

    if(isArtStatement){
      statement = <div>About this Piece: <br/>{this.state.artwork.art_statement}</div>;
    } else {
      <div></div>
    }
    return(
      <div className="show">
      <div className="showImage">
      <img
      src={this.state.artwork.art_photo && this.state.artwork.art_photo.url}

      />
      </div>
      <div className="showInfo">
      <div>Title: {this.state.artwork.title}</div>
    <div>Artist: {artist}</div>
      <div>Hospital: {this.state.artwork.hospital_name}</div>
      <div>City: {this.state.artwork.city}</div>
      <div>State: {this.state.artwork.state}</div>
      {statement}
      </div>
      </div>
    );
  }

}

export default Show
