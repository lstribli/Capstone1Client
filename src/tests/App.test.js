
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from '../Header/Header'
// import PrivateRoute from '../Utils/PrivateRoute'
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import HomePage from '../../routes/HomePage/HomePage'
import ThingListPage from '../../routes/ThingListPage/ThingListPage'
import ThingPage from '../../routes/ThingPage/ThingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import EditNotePage from '../../routes/ThingPage/renderEdit'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Header />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<HomePage />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<ThingListPage />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<ThingPage />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<LoginPage />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<RegistrationPage />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<EditNotePage />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<NotFoundPage />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});