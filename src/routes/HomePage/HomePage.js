import React from 'react'
import './HomePage.css'
import { Section } from '../../components/Utils/Utils'
export default class HomePage extends React.Component {
  render() {
    return (
      <Section>
        <div className="appTitle">
          <h2>Aura</h2>
        </div>
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