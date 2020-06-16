import React, { Component } from 'react';
import Welcome from './welcome';
import Dashboard from '../components/dashboard';
import AdminDashboard from './AdminDashboard';
class home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      artworks: [],
      user: {}


    }
    this.getArtworks = this.getArtworks.bind(this)
    this.getUser = this.getUser.bind(this)

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




  render() {
   
    return(
      <div>
        {
   (() => {
       if (this.state.user.role === 'artist')
          return <Dashboard />;
       if (this.state.user.role === 'staff')
          return <AdminDashboard/>;
       else
          return <Welcome />;
   })()
}
      </div>
    );
  }
};

export default home;
