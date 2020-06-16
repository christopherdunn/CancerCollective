import React from 'react'

const DropMenuState = props => {
  return(
    <label>{props.label}
      <select name="state" onChange={props.handleChange}>
        <option name="state" value=""></option>
        <option name="state" value="AL">AL</option>
        <option name="state" value="AK">AK</option>
        <option name="state" value="AZ">AZ</option>
        <option name="state" value="AR">AR</option>
        <option name="state" value="CA">CA</option>
        <option name="state" value="CO">CO</option>
        <option name="state" value="CT">CT</option>
        <option name="state" value="DE">DE</option>
        <option name="state" value="FL">FL</option>
        <option name="state" value="GA">GA</option>
        <option name="state" value="HI">HI</option>
        <option name="state" value="ID">ID</option>
        <option name="state" value="IL">IL</option>
        <option name="state" value="IN">IN</option>
        <option name="state" value="IA">IA</option>
        <option name="state" value="KS">KS</option>
        <option name="state" value="KY">KY</option>
        <option name="state" value="LA">LA</option>
        <option name="state" value="ME">ME</option>
        <option name="state" value="MD">MD</option>
        <option name="state" value="MA">MA</option>
        <option name="state" value="MI">MI</option>
        <option name="state" value="MN">MN</option>
        <option name="state" value="MS">MS</option>
        <option name="state" value="MO">MO</option>
        <option name="state" value="MT">MT</option>
        <option name="state" value="NE">NE</option>
        <option name="state" value="NV">NV</option>
        <option name="state" value="NH">NH</option>
        <option name="state" value="NJ">NJ</option>
        <option name="state" value="NM">NM</option>
        <option name="state" value="NY">NY</option>
        <option name="state" value="NC">NC</option>
        <option name="state" value="ND">ND</option>
        <option name="state" value="OH">OH</option>
        <option name="state" value="OK">OK</option>
        <option name="state" value="OR">OR</option>
        <option name="state" value="PA">PA</option>
        <option name="state" value="RI">RI</option>
        <option name="state" value="SC">SC</option>
        <option name="state" value="SD">SD</option>
        <option name="state" value="TN">TN</option>
        <option name="state" value="TX">TX</option>
        <option name="state" value="UT">UT</option>
        <option name="state" value="VT">VT</option>
        <option name="state" value="VA">VA</option>
        <option name="state" value="WA">WA</option>
        <option name="state" value="WV">WV</option>
        <option name="state" value="WI">WI</option>
        <option name="state" value="WY">WY</option>
      </select>
    </label>
  )
}
export default DropMenuState
