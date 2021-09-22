import React from 'react'
import SignInComponent from '../../components/sign-in/sign-in.component'
import SignUpComponent from '../../components/sign-up/sign-up.component.jsx'
import './login.styles.scss'
const LoginPage = () => {
  return (
    <div className='authentication'>
      <SignInComponent />
      <SignUpComponent />
    </div>
  )
}

export default LoginPage
