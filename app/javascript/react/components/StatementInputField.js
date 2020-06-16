import React from 'react'

const StatementInputField = props => {
  return(
    <label>{props.label}
      <textarea
        type='text'
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        rows='6'
      />
    </label>
  )
}

export default StatementInputField
