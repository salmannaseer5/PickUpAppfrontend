import React, { Component } from 'react';
import NewOrder from '../NewOrder/NewOrder.js'
import ViewOrder from '../ViewOrder/ViewOrder.js'

class Home extends Component {
  render() {
    return (
      <div>
        <NewOrder/>
        <h2>or</h2>
        <ViewOrder/>
      </div>
    );
  }
}

export default Home;
