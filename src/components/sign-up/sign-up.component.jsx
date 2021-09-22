import React, { Component } from 'react'
import CustomButton from '../ui/custom-button/custom-button.component'
import FormInput from '../ui/form-input/form-input.components'
import {  getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {  createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss'

class SignUpComponent extends Component {
  constructor() {
    super();

    this.state = {
      displayName : '',
      email : '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      // alert("Password don't match");
      console.error("Password don't match");
      return;
    }

    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        createUserProfileDocument(user, { displayName })
     
       this.setState({displayName : '',email : '',password: '',confirmPassword: ''})

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
    //  
  } 

  // handleChage = event => {
  //   const {value, name} = event.target;
  //   this.setState({ [name]: value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.setState({ email: '', password: ''})
  // }

  handleChange = event => {
    const {value, name } = event.target;
    this.setState({ [name]: value })
  }
  

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
      
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
         <FormInput 
              name='email' 
              type='email' 
              value={email} 
              handleChange={this.handleChange} 
              label='Email'
              required />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />

          {/* <button type='submit' className='custom-button'>Sign up</button> */}
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>

        
      </div>
    )
  }
}

export default SignUpComponent
