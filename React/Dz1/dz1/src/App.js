import React, { Component } from 'react';
import OrderHistory from './OrderHistory/OrderHistory';
import db from './OrderHistory/order-history.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <main>
            <OrderHistory db={db} />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
