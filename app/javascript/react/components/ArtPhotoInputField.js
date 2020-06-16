import React from 'react'

const ArtPhotoInputField = props => {
  return(
    <label>{props.label}
      <input
        type='file'
        value={props.value}
        name={props.name}
        onChange={props.handleChange}

      />
    </label>
  )
}

export default ArtPhotoInputField
