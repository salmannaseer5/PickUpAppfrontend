import React, { Component } from 'react';
import NewOrder from '../NewOrder/NewOrder.js'
import SearchOrder from '../SearchOrder/SearchOrder.js'

class Home extends Component {
  render() {
    return (
      <div>
        <NewOrder/>
        <h2>or</h2>
        <SearchOrder/>
      </div>
    );
  }
}

export default Home;
