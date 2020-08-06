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
      // const isAnonymous = {artwork.anonymous};
      // let artist;
      
      // if(isAnonymous){
      //   artist= "Anonymous";
      // }else {
      //   artist= artwork.first_name +' '+ artwork.last_name;
      // }
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
            anonymous={artwork.anonymous}
            
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
