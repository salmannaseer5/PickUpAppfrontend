import React, { Component } from 'react';

class NewOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            pickUpAddress: '',
            dropOffAddress: '',
            time: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePickUpAddressChange = this.handlePickUpAddressChange.bind(this);
        this.handleDropOffAddressChange = this.handleDropOffAddressChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePickUpAddressChange(event) {
        this.setState({pickUpAddress: event.target.value})
    }

    handleDropOffAddressChange(event) {
        this.setState({dropOffAddress: event.target.value})
    }

    handleTimeChange(event) {
        this.setState({time: event.target.value})
    }

    handleSubmit(event) {
        alert('Thank you for your order ' + this.state.name + '!');
        event.preventDefault();
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>New Order</h1>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="name" />
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="email" />
            <input type="text" value={this.state.pickUpAddress} onChange={this.handlePickUpAddressChange} placeholder="pickup address" />
            <input type="text" value={this.state.dropOffAddress} onChange={this.handleDropOffAddressChange} placeholder="dropoff address" />
            <input type="text" value={this.state.time} onChange={this.handleTimeChange} placeholder="time" />
            <input type="submit" value="place order" />
      </form>
    );
  }
}

export default NewOrder;