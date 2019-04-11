import React, { Component } from 'react';
import Toggle from './Toggle';
import Paragraf from './Paragraf';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          <Paragraf text='React'/>
          <Paragraf text='is'/>
          <Paragraf text='So good'/>
        </Toggle>
      </div>
    );
  }
}

export default App;
