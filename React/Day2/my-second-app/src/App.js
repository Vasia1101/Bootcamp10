import React, { Component } from 'react';
import Counter from './Counter/Counter'
import StepChenger from './Counter/StepChenger'
// import DiscrabeList from './Dicrabe/DiscrabeList'
// import Img from './Img/Img';
// import Discrabe from './Dicrabe/Discrabe';
import './App.css';

class App extends Component {
  state = {
    counterStep:0,
  }
  handleChengeStep = () => {
    this.setState(prevState=>({counterStep:prevState.counterStep-1}));
  };
  render() {
    const {counterStep} = this.state;
    return (

      <div >
        <StepChenger
        counterStep={counterStep}
        onUpdateStep={this.handleChengeStep}
        />
        <Counter step={counterStep} initialValue={0}/>
        
        
                 
      </div>
    );
  }
}

export default App;
