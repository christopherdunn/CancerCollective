import React from 'react';
import { Link } from 'react-router-dom'
const dashnav = props => {

  return(
    <nav className="dashnav">
      <h3>Hi {props.name}</h3>
    <ul>
    <li>Dashboard</li>
    <li className="a"onClick={props.formClick}>Add Artwork</li>
    <li className="" onClick={props.uploadClick}>My Uploads</li>
    <li>Help Guide</li>
    <li><a href="/users/edit">Profile Settings</a></li>
    </ul>
    </nav>
  );
};

export default dashnav;
