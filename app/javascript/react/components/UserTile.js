import React from 'react';

const usertile = (props) => {

  return(

    <div className='ApprovalUploads'>
        <div className="approval-title">
        {props.first_name} {props.last_name}  
        </div> 
        <div><button className="button" onClick={props.delete}> Delete</button></div>
        </div>
  )
}

export default usertile;