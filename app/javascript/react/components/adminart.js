import React from 'react';

const adminart = (props) => {

  return(

    <div className='ApprovalUploads'>
        <div><img className="myartimage" src={props.image}/></div><div className="adminspacer"/>
        <div className="approval-title">
        {props.first_name} {props.last_name}, {props.title} 
        </div>
        <div><button className="button" onClick={props.approve}> Approve</button></div> 
        <div><button className="button" onClick={props.delete}> Delete</button></div>
        </div>
  )
}

export default adminart;
