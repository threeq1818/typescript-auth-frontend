// App.tsx

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded: any = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    logoutUser();
    //  store.dispatch();
    window.location.href = '/login';
  }
}

const isAuthenticate = () => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded: any = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      return false;
    }
    else return true;
  }
  else
    return false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render = {(props) => (
    isAuthenticate() ?
      <Component { ...props } />
      : <Redirect to= '/login' />
  )} />
)

class App extends Component {
  render() {
    return (
      <Provider store= { store } >
      <Router>
      <div>
      <Navbar />
      < PrivateRoute exact path = "/" component = { Home } />
        <div className="container" >
          <Route exact path = "/register" component = { Register } />
            <Route exact path = "/login" component = { Login } />
              </div>
              < /div>
              < /Router>
              < /Provider>
    );
  }
}

export default App;