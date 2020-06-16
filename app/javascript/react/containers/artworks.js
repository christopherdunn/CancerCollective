import React, { Component } from 'react';
import ArtTile from '../components/ArtTile';

class Artworks extends Component {
  constructor(props) {
    super(props);
    this.state ={
      artworks: []
    }
    this.getArtworks = this.getArtworks.bind(this)

  }

    componentDidMount(){
      this.getArtworks();
      
    }
    getArtworks() {
      fetch('api/v1/artworks', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then(json => {
        this.setState({ artworks: json.artworks});
      });
    }
    render() {
      let artworks = this.state.artworks.map(artwork =>{
        return(
          <ArtTile
            key={artwork.id}
            id={artwork.id}
            image={artwork.art_photo.url}
            title={artwork.title}
            first_name={artwork.first_name}
            last_initial={artwork.last_name}
            hospital={artwork.hospital_name}
            
          />
        )
      })
      return(
        <div className="ArtMain">
        <ul key="artwork-listing">
        {artworks}
        </ul>

        </div>
      );
    }
}
export default Artworks
