import React, { Component } from 'react';
import './Delete.css'

class Delete extends Component {
  render() {
    return (
      <div className="delete-container">
        <h2>Your order has been canceled</h2>
        <h3>Sorry to see you go...</h3>
      </div>
    );
  }
}

export default Delete;