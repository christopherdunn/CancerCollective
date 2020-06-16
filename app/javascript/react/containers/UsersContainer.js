import React, { Component } from 'react';
import UserTile from '../components/UserTile';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state ={
      users:[]
    }
    this.getUsers = this.getUsers.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }

    componentDidMount(){
      this.getUsers();
      
    }
    componentDidUpdate(prevState){
        if(prevState.users !== this.state.users) {
          this.getUsers();
        }   
      }
    getUsers(){
        fetch('admin/users', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({users: json.users});
        });
    }
    handleDeleteClick(id){
        event.preventDefault();
        fetch(`/admin/users/${id}`, {
            credentials:'same-origin',
            method: "Delete",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    }
    render() {
      let users = this.state.users.map(user=>{
          return(
              <UserTile
              key={user.id}
              id={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              delete={()=> this.handleDeleteClick(user.id)}
              />
          )
      })
      return(
        <div className="ArtMain">
        <ul key="artwork-listing">
       
        {users}
        </ul>

        </div>
      );
    }
}
export default Users
