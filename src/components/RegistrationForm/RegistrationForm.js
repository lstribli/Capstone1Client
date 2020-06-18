import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import ThingApiService from '../../services/thing-api-service'
import LoginPage from '../../routes/LoginPage/LoginPage'
export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { },
    onRegistration2Success: () => { },
    location: {},
    history: {
      push: () => { },
    },
  }

  handleRegistration2Success = () => {
    const { location, history } = this.props
    const destination = (location.state || { LoginPage }).from || '/login'
    history.push(destination)
  }
  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target
    // console.log(user_name.value)
    console.log('registration form submitted')
    // console.log({ user_name, password })
    const userName = user_name.value
    const pass = password.value
    ThingApiService.postCredentials(userName, pass)
    user_name.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
    this.props.onRegistration2Success()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
