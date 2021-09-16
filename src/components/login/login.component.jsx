import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from './../form-input/form-input.components'
import signInWithGoogle from './../../firebase/firebase.utils.js'

import './login.styles.scss'

export class LoginComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const {value, name } = event.target;
    this.setState({ [name]: value })
  }
  
  render() {
    return (
      <div className='login'>
          <h2 className='title'>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput 
              name='email' 
              type='email' 
              value={this.state.email} 
              handleChange={this.handleChange} 
              label='Email'
              required />
            <FormInput 
              name='password' 
              type='password'
              value={this.state.password} 
              handleChange={this.handleChange} 
              label='Password'
              required/>

            <CustomButton type='submit' value='Submit Form' > Sign In</CustomButton>
          </form>
          <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>

          <button onClick={signInWithGoogle}>
          Login with Google
        </button>

      </div>
    )
  }
}

export default LoginComponent