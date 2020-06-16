import React, { Component } from 'react';
import ArtTextInputField from '../components/ArtTextInputField';
import StatementInputField from '../components/StatementInputField';

class Hospital extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      promo_code: '',
      about: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/users', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({current_user: data.user})
    })

    }

    handleChange(event) {
      let value = event.target.value
      let name = event.target.name
      this.setState({ [name]: value })
    }

    handleClearForm() {
      this.setState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        promo_code: '',
        about: ''
      })
    }

    handleSubmit(event) {
      event.preventDefault();
      let formPayload = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        promo_code: this.state.promo_code,
        about: this.state.about
        }
  
        fetch('/api/v1/hospitals/', {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(formPayload),
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'}
      })
        .then(response => {
          if(response.ok){
            return response
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({hospital: body})
          
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
        this.handleClearForm() 
    }

  render(){
    return(
      <div className="hospital-form"> 
        
        <form onSubmit={this.handleSubmit}>
          <div className="formfields">
            <ArtTextInputField
            label='Name'
            value={this.state.name}
            name='name'
            handleChange={this.handleChange}
            />

            <ArtTextInputField
            label='Address'
            value={this.state.address}
            name='address'
            handleChange={this.handleChange}
            />

            <ArtTextInputField
            label='City'
            value={this.state.city}
            name='city'
            handleChange={this.handleChange}
            />
            
            <ArtTextInputField
            label='State'
            value={this.state.state}
            name='state'
            handleChange={this.handleChange}
            />

            <ArtTextInputField
            label='Zipcode'
            value={this.state.zip}
            name='zip'
            handleChange={this.handleChange}
            />
            
            <ArtTextInputField
            label='Promotional Code'
            value={this.state.promo_code}
            name='promo_code'
            handleChange={this.handleChange}
            />
            <StatementInputField
            label='About'
            value={this.state.about}
            name='about'
            handleChange={this.handleChange}
            />
            <input type='submit' value='Submit'/>
          </div>
        </form>
      </div>

    );
  }
}

export default Hospital
