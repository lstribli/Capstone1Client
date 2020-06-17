import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import ThingListPage from '../ThingListPage/ThingListPage'
export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || { ThingListPage }).from || '/meditations'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        <div className="appInstruct">
          <h3>How to use:</h3>
        </div>
        <div>
          <ul>
            <li>
              <p>To demo the Aura app, navigate to the Login page by clicking the "Login" link in the Header.</p>
            </li>
            <li>
              <p>Next, enter the Username "dunder" and Password "password"</p>
            </li>
            <li>
              <p>On successful Login, you will be navigated to a list of guided meditations, click on one of them to start.</p>
            </li>
            <li>
              <p>After you are done meditating, you can record your experience using the Form at the bottom of the page.
              Your notes are just that- YOUR notes. No other users will be able to Read or access your information!
          </p>
            </li>
          </ul>
        </div>
      </Section>
    )
  }
}
