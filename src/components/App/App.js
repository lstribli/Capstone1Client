import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import HomePage from '../../routes/HomePage/HomePage'
import ThingListPage from '../../routes/ThingListPage/ThingListPage'
import ThingPage from '../../routes/ThingPage/ThingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import EditNotePage from '../../routes/ThingPage/renderEdit'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    // loop autoplay
    //?autoplay=1&mute=1
    //autoPlay
    //id="background-video"
    return (
      <div className='App'>
        <iframe id="background-video" width="1280" height="720"
          src="https://www.youtube.com/embed/n9v-2xF54HM?autoplay=1&mute=1"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div className="hover"></div>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={HomePage}
            />
            <Route
              path={'/login'}
              component={LoginPage}
            />
            <Route
              exact
              path={'/meditations'}
              component={ThingListPage}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/thing/:thingId'}
              component={ThingPage}
            />
            <Route
              path={'/edit'}
              component={EditNotePage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
        <div className="hover2"></div>
      </div>
    )
  }
}

export default App
