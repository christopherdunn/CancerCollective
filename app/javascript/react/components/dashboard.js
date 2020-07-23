import React, { Component } from 'react';
import ArtworkFormContainer from '../containers/ArtFormContainer';
import Dashnav from './Dashnav';
import Myart from '../components/myart';
import HospitalsForm from '../containers/HospitalFormContainer';




class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      artworks: [],
      user: {},
      showuploads: false,
      showform: true,
      showhospitals: false

    };
    this.getArtworks = this.getArtworks.bind(this);
    this.getUser = this.getUser.bind(this);
    this.handleUploadsClick = this.handleUploadsClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleHospitalsClick = this.handleHospitalsClick.bind(this);
  }

  componentDidMount(){
    this.getArtworks();
    this.getUser();
    

  }

  getUser() {
    fetch('/api/v1/users', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({user: json.user})
    })
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

    // **  handlers for side navigation **
  handleFormClick(event){
    event.preventDefault();
    this.setState({
      showuploads: false,
      showform: true,
      showhospitals: false
    });
  }

  handleUploadsClick(event){
    event.preventDefault();
    this.setState({
      showuploads: true,
      showform: false,
      showhospitals: false
    });
  }
  handleHospitalsClick(event){
    event.preventDefault();
    this.setState({
      showuploads: false,
      showform: false,
      showhospitals: true
    });
  }
  render() {



      // ** Creation of actual list of artwork by the user **
    let allarts = this.state.artworks
    let myid = this.state.user.id
    let myarts = allarts.filter(myart => myart.user_id == myid)

    let artworks = myarts.map(artwork =>{
      return(

        <Myart
        key={artwork.id}
        id={artwork.id}
        first_name={artwork.first_name}
        last_name={artwork.last_name}
        title= {artwork.title}
        image={artwork.art_photo.url}
        />

      )
    })
    // ** Section deals with showing uploads list **
    const isUploads = this.state.showuploads
    let uploads

    if(isUploads == true) {
      uploads =
      <div>
      <h5>You've uploaded {myarts.length} Works of Art</h5>
      <ul key="artwork-listing">
      {artworks}
      </ul>
      </div>
      }
      else {
        <div></div>
      }
      // ** deals with showing upload form **
      const isform = this.state.showform
      let form
      if(isform == true) {
        form =
        <ArtworkFormContainer />
      } else{
        <div></div>
      }
      // ** deals with showing add hospital form ** 
      const ishospitals = this.state.showhospitals
      let hospitals
      if(ishospitals == true) {
        hospitals =
        <HospitalsForm />
      } else{
        <div></div>
      }
      // ** changes the sidebar navigation depending on the user profile **
      
    return(
    <div className="dash-wrapper">
    <div className="dash-left">
    <Dashnav 
        name={this.state.user.first_name}
        uploadClick={this.handleUploadsClick}
        formClick={this.handleFormClick}
        />
    </div>
    <div className="dash-center">
      {form}
      {uploads}
      {hospitals}
    </div>
    <div className="dash-right">

    </div>
    </div>
    );
  }
};

export default dashboard;
