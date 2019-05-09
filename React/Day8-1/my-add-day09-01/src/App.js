import React, { Component } from 'react';
import UserProfile from './UserProfile';
import AuthContextProvider from './context/AuthContext';
import AppBar from './AppBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <AuthContextProvider>
        <AppBar />
      <UserProfile />
      </AuthContextProvider>
      </>
    );
  }
}

export default App;
