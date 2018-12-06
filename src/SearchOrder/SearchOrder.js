import React, { Component } from 'react';
import './SearchOrder.css'

class SearchOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: ''
    }
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event) {
    this.setState({id: event.target.value})
  }

  handleSubmit(event) {
    alert('Searching for your order');
    event.preventDefault();
  }

  render() {
    return (
      <div className="searchOrder-div">
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <h2>
            Order Number
        </h2>
        <div className="search-form">
        <input className="form-control" type="text" value={this.state.id} onChange={this.handleIdChange} placeholder="Search" aria-label="Search"/>
        </div>
        <button class="btn btn:hover" type="submit">Search</button>
      </form>
      </div>
    );
  }
}

export default SearchOrder;
