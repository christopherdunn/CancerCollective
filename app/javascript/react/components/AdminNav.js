import React from 'react';
import { Link } from 'react-router-dom'
const AdminNav = props => {

  return(
    <nav className="dashnav">
      <h3>Hi {props.name}</h3>
    <ul>
    <li>Dashboard</li>
    <li className="a"onClick={props.approvalClick}>For Approval</li>
    <li onClick={props.hospitalClick}>Add Hospital</li>
    <li className="" onClick={props.allartClick}>All Uploads</li>
    <li onClick={props.usersClick}>List of Users</li>
    <li><a href="/users/edit">Profile Settings</a></li>
    
    </ul>
    </nav>
  );
};

export default AdminNav;