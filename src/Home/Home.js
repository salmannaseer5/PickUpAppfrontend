import React, { Component } from 'react';
import NewOrder from '../NewOrder/NewOrder.js'
import SearchOrder from '../SearchOrder/SearchOrder.js'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-div">
      <div className="home-order">
        <NewOrder/>
        </div>
        <div className="home-search">
        <SearchOrder/>
      </div>
      </div>
    );
  }
}

export default Home;
