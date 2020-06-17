import React from 'react'
import './HomePage.css'
import { Section } from '../../components/Utils/Utils'
export default class HomePage extends React.Component {
  render() {
    return (
      <Section>
        <div className="appTitle">
          <h2 className="Aura">Aura</h2>
          <p>To learn how to use, navigate to "Login"</p>
        </div>

      </Section>
    )
  }
}