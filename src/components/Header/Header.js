import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'
import { Button } from '../Utils/Utils'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <h1>
          <Link to='/meditations'>
            <Button>
              Meditate
            </Button>
          </Link>
        </h1>
        <Link
          onClick={this.handleLogoutClick}
          to='/login'>
          <Button>
            Logout
          </Button>
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          <Button>
            Login
          </Button>
        </Link>
        <Link
          to='/register'>
          <Button>
            Register
          </Button>
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            <Button>
              HOME
            </Button>
          </Link>
        </h1>

        <span className='Header__tagline--wide'>'Meditate, Reflect, Renew'</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>


    </>
  }
}
