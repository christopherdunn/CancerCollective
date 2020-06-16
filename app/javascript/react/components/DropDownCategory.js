import React from 'react'

const DropDownCategory = props => {
  return(
    <label>{props.label}
      <select name="category" onChange={props.handleChange}>
      <option name="category" value=""></option>
        <option name="category" value="Painting">Painting</option>
        <option name="category" value="Drawing">Drawing</option>
        <option name="category" value="Sculpture">Sculpture</option>
        <option name="category" value="Stained Glass">Stained Glass</option>
        <option name="category" value="Graphic">Graphic</option>
        <option name="category" value="Illustration">Illustration</option>
        <option name="category" value="Knitting">Knitting</option>
        <option name="category" value="Cross-Stitch">Cross-Stitch</option>
        <option name="category" value="Photography">Photography</option>
      </select>
    </label>
  )
}
export default DropDownCategory
