import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'

// constants
// change to actual routes from Pickup-app-API
const backendBaseUrl = 'http://localhost:8000/api/orders';
const postEndpoint = '/api/post/newOrder';

class NewOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            pickUpAddress: '',
            dropOffAddress: '',
            time: '',
<<<<<<< HEAD
            driver: ''
=======
            redirect: false
>>>>>>> 68287d2ae0927c78662e9e596ca274b4b0e7bc58
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

    // handleNameChange = (event) => {
    //     this.setState({name: event.target.value});
    // }

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
            // do we need to save to api here?
        }).then(() => this.setState({redirect: true}));
        event.preventDefault();
    }

    // handleClearForm

  render() {
      
      if (this.state.redirect === true) {
        return <Redirect to='/order' />
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


// example from https://tylermcginnis.com/react-router-programmatically-navigate/
// class Register extends React.Component {
//     state = {
//       toDashboard: false,
//     }
//     handleSubmit = (user) => {
//       saveUser(user)
//         .then(() => this.setState(() => ({
//           toDashboard: true
//         })))
//     }
//     render() {
//       if (this.state.toDashboard === true) {
//         return <Redirect to='/dashboard' />
//       }
  
//       return (
//         <div>
//           <h1>Register</h1>
//           <Form onSubmit={this.handleSubmit} />
//         </div>
//       )
//     }
//   }