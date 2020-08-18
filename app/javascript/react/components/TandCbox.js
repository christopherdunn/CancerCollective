import React from 'react'
import {Link} from 'react-router-dom'
const TermsCheckbox = props => {
  return(
    <label>
      <input
        name={props.name}
        type='checkbox'
        checked={props.checked}
        onChange={props.handleChange}
      /> <Link to='/terms'> {props.label}</Link>
    </label>
  )
}

export default TermsCheckbox