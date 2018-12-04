import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <h2>
            Order Number
        </h2>
        <input type="text" value={this.state.id} onChange={this.handleIdChange} placeholder="order number" />
        <input type="submit" value="view order" />
      </form>
    );
  }
}

export default SearchOrder;
