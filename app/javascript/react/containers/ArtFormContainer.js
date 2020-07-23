import React, { Component } from 'react';
import ArtTextInputField from '../components/ArtTextInputField';
import Dropzone from 'react-dropzone';
import StatementInputField from '../components/StatementInputField';
import DropDownState from '../components/DropDownState';
import DropDownCategory from '../components/DropDownCategory';
import Checkbox from '../components/Checkbox';



class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      art_photo: [],
      title: '',
      hospital_name: '',
      city: '',
      state: '',
      current_user: {},
      message: '',
      art_statement: '',
      category:'',
      hospital: {},
      terms: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.getHospital = this.getHospital.bind(this)
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
      if (this.state.current_user !== null) this.getHospital(this.state.current_user.hospital_id);
    })
    
  
    
    }
    getHospital(id){
      fetch(`/api/v1/hospitals/${id}`,{
        credentials:'same-origin',
        method: "GET",
        headers: {'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(data => {
        this.setState({hospital: data.hospital})
      })
      
    }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }
  handleCheckboxChange(event) {
    const target = event.target;
    const value = target.type == 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ 
      [name]: value
    })
    console.log(this.state.terms)
  }

  handleClearForm() {
    this.setState({
      first_name: '',
      last_name: '',
      art_photo: [],
      title: '',
      hospital_name: '',
      city: '',
      state: [0],
      art_statement: '',
      category: null,
      terms: false
    })
  }

  onDrop(art_photo) {
  if(art_photo.length == 1) {
    this.setState({ art_photo });
  } else {
    this.setState({ message: 'You can only upload one photo per piece of artwork.'})
  }
}

  handleSubmit(event) {
    event.preventDefault();
    let body = new FormData()
      body.append("first_name", this.state.current_user.first_name)
      body.append("last_name", this.state.current_user.last_name)
      body.append("art_photo", this.state.art_photo[0])
      body.append("title", this.state.title)
      body.append("hospital_name", this.state.hospital.name)
      body.append("city", this.state.hospital.city)
      body.append("state", this.state.hospital.state)
      body.append("user_id", this.state.current_user.id)
      body.append("art_statement", this.state.art_statement)
      body.append("category", this.state.category)
      body.append("terms", this.state.terms)

      fetch('/api/v1/artworks/', {
      credentials: 'same-origin',
      method: 'POST',
      body: body


    })
      .then(response => response.json())
      .then(body => {
        this.setState({ message: body.message })
      })
    this.handleClearForm()
  }

  render(){
    const art_photo = this.state.art_photo.map(f => (
      <li key={f.name}>
      {f.name} - {f.size} bytes
      </li>
    ))
    return(
      <div className="artform" >
      <form onSubmit={this.handleSubmit}>
      <div className="formfields">

        <ArtTextInputField
          label='Title'
          value={this.state.title}
          name='title'
          handleChange={this.handleChange}

        />
        <DropDownCategory
        label='Category'
        content='this.state.category'
        name='category'
        handleChange={this.handleChange}
        />
        <StatementInputField
          label='Statement about the piece'
          value={this.state.art_statement}
          name='art_statement'
          handleChange={this.handleChange}
          placeholder='Say something about this piece'

        />
        </div>
        <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
          {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />

              <div className="fileuploader"><p>Drop file here, or click to select file</p></div>
          </div>
        )}
          </Dropzone>
        </div>
        <aside>
          <div className="formfields"><h2>Files for Upload</h2></div>
          <ul>
            {art_photo}
          </ul>
        </aside>
      </section>
      <div className="formfields">
      <Checkbox
      name = 'terms'
      checked = {this.state.terms}
      label = 'I agree to the Terms and Conditions'
      handleChange = {this.handleCheckboxChange}
      />

        <input type='submit' value='Submit'/>
        </div>
      </form>
      </div>
    )
  }
}

export default FormContainer
