import React, { Component } from 'react';
import HospitalsForm from './HospitalFormContainer';
import AdminNav from '../components/AdminNav';
import Adminart from '../components/adminart';
import UsersList from './UsersContainer';


class adminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            artworks: [],
            user: {},
            showhospitals: false,
            showuploads: true,
            showartworks: false,
            showusers: false
        }
        this.getArtworks = this.getArtworks.bind(this);
        this.getUser = this.getUser.bind(this);
        this.handleHospitalsClick = this.handleHospitalsClick.bind(this);
        this.handleApprovalsClick = this.handleApprovalsClick.bind(this);
        this.handleAllArtClick = this.handleAllArtClick.bind(this);
        this.patchApprovalClick = this.patchApprovalClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleUsersClick = this.handleUsersClick.bind(this);
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
        fetch('/admin/artworks', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(json => {
          this.setState({ artworks: json.artworks});
        });
      }
    
      handleApprovalsClick(event){
        event.preventDefault();
        this.setState({
          showuploads: true,
          showartworks: false,
          showhospitals: false,
          showusers: false
        });
      }

      handleAllArtClick(event){
        event.preventDefault();
        this.setState({
          showuploads: false,
          showhospitals: false,
          showartworks: true,
          showusers: false
        });
      }

      handleHospitalsClick(event){
        event.preventDefault();
        this.setState({
          showuploads: false,
          showhospitals: true,
          showartworks: false,
          showusers: false
        });
      }
      handleUsersClick(event){
        event.preventDefault();
        this.setState({
          showuploads: false,
          showhospitals: false,
          showartworks: false,
          showusers: true
        });
      }
      patchApprovalClick(id){
          event.preventDefault();
          let formPayload = {
              display: true
          }

          fetch(`/admin/artworks/${id}`, {
            credentials: 'same-origin',
            method: "PATCH",
            body: JSON.stringify(formPayload),
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => response.json())
      }
      handleDeleteClick(id){
          event.preventDefault();
          fetch(`/admin/artworks/${id}`, {
              credentials:'same-origin',
              method: "Delete",
              headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.json())
      }

    render(){
          // ** Creation of actual list of artworks waiting to be approved **
    let allarts = this.state.artworks
    let unapprovedarts = allarts.filter(myart => myart.display == false)

    let forapprovalartworks = unapprovedarts.map(artwork =>{
      return(

        <Adminart
        key={artwork.id}
        id={artwork.id}
        first_name={artwork.first_name}
        last_name={artwork.last_name}
        title= {artwork.title}
        image={artwork.art_photo.url}
        approve ={()=> this.patchApprovalClick(artwork.id)}
        delete ={()=> this.handleDeleteClick(artwork.id)}
        />

      )
    })
     // ** Section deals with showing unapproved uploads list **
     const isUploads = this.state.showuploads
     let uploads
 
     if(isUploads == true) {
       uploads =
       <div>
       <h5>You've got {unapprovedarts.length} work's of art waiting to be approved</h5>
       <ul key="artwork-listing">
       {forapprovalartworks}
       </ul>
       </div>
       }
       else {
         <div></div>
       }
       // ** Section deals with adding a hospital **
        const ishospitals = this.state.showhospitals
      let hospitals
      if(ishospitals == true) {
        hospitals =
        <HospitalsForm />
      } else{
        <div></div>
      }
      // ** section for showing users **
      const isusers = this.state.showusers
      let users
      if(isusers == true) {
        users =
        <UsersList />
      } else{
        <div></div>
      }
    // ** Section deals with showing everything uploaded **
    let approveduploads = this.state.artworks.map(artwork => {
        return(
          <Adminart
  key={artwork.id}
  id={artwork.id}
  first_name={artwork.first_name}
  last_name={artwork.last_name}
  title= {artwork.title}
  image={artwork.art_photo.url}
  approve ={()=> this.patchApprovalClick(artwork.id)}
  delete ={()=> this.handleDeleteClick(artwork.id)}
  />
        )
    });
      const isalluploads = this.state.showartworks
      let alluploads
      if(isalluploads == true) {
          alluploads =
          <div>
              <h5>{approveduploads.length} work's of art have been uploaded</h5>
              <ul key="all-uploads-listing">
                {approveduploads}
              </ul>
          </div>
      } else {
          <div></div>
      }

        return(
            
            <div className="dash-wrapper">
                
            <div className="dash-left">
            <AdminNav
            name={this.state.user.first_name}
            approvalClick={this.handleApprovalsClick}
            hospitalClick={this.handleHospitalsClick}
            allartClick={this.handleAllArtClick}
            usersClick={this.handleUsersClick}
                />
            </div>
            <div className="dash-center">
                {uploads}
              {hospitals}
              {alluploads}
              {users}
            </div>
            <div className="dash-right">
        
            </div>
            </div>
        )
    }
}

export default adminDashboard;