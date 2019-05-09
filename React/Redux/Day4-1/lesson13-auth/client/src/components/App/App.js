import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../../pages';
import Header from '../Header/Header';
import * as operations from '../../redux/operations';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Profile from '../../pages/Profile';
import Dashboard from '../../pages/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <ProtectedRoute
            path="/profile"
            redirectTo="/signin"
            component={Profile}
          />
          <ProtectedRoute
            path="/dashboard"
            redirectTo="/signin"
            component={Dashboard}
          />

          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { refreshCurrentUser: operations.refreshCurrentUser }
)(App);
