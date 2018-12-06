import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'

// constants
const backendBaseUrl = 'http://localhost:8000';
const postEndpoint = '/api/orders';

class NewOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            pickUpAddress: '',
            dropOffAddress: '',
            time: '',
            driver: ''
            id: '',
            redirect: false
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
        // Send a POST request
        axios({
            method: 'post',
            url: backendBaseUrl + postEndpoint,
            data: {
                name: this.state.name, 
                email: this.state.email, 
                pickUpAddress: this.state.pickUpAddress, 
                dropOffAddress: this.state.dropOffAddress,
                time: this.state.time
            }
            // have access to data created
        })
        .then((dataResult) => this.setState({id: dataResult.data._id}))
        .then(() => this.setState({redirect: true}));
        event.preventDefault();
    }


  render() {
      
      if (this.state.redirect === true) {
        return <Redirect to={'/order/' + this.state.id} />
      }

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