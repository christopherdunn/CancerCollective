import React from 'react'

const Checkbox = props => {
  return(
    <label>
      <input
        name={props.name}
        type='checkbox'
        checked={props.checked}
        onChange={props.handleChange}
      /> {props.label}
    </label>
  )
}

export default Checkbox
