import React, { Component } from 'react';
import './NewOrder.css'
import axios from 'axios';
import { Redirect } from 'react-router'

// defines environmental variables DE
// const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION

const backendBaseUrl = "http://localhost:8000"

const postEndpoint = '/api/orders';

class NewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pickUpAddress: '',
            dropOffAddress: '',
            time: '',
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
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePickUpAddressChange(event) {
        this.setState({ pickUpAddress: event.target.value })
    }

    handleDropOffAddressChange(event) {
        this.setState({ dropOffAddress: event.target.value })
    }

    handleTimeChange(event) {
        this.setState({ time: event.target.value })
    }

    handleSubmit(event) {

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
        })
            .then((dataResult) => this.setState({ id: dataResult.data._id }))
            .then(() => this.setState({ redirect: true }));
        event.preventDefault();
    }


    render() {

        if (this.state.redirect === true) {
            return <Redirect to={'/order/' + this.state.id} />
        }

        return (
            <div className="neworder-div">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <h1>new order</h1>
                    <div className="newOrder">
                        <div className="orderInput">
                            <input className="form-control" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
                        </div>
                        <div className="orderInput">
                            <input className="form-control" type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                        </div>
                        <div className="orderInput">
                            <input className="form-control" type="text" value={this.state.pickUpAddress} onChange={this.handlePickUpAddressChange} placeholder="Pickup Address" />
                        </div>
                        <div className="orderInput">
                            <input className="form-control" type="text" value={this.state.dropOffAddress} onChange={this.handleDropOffAddressChange} placeholder="Dropoff Address" />
                        </div>
                        <div className="orderInput">
                            <input className="form-control" type="text" value={this.state.time} onChange={this.handleTimeChange} placeholder="Time" />
                        </div>
                        <div className="orderInput">
                            <input className="placeOrder placeOrder:hover" type="submit" value="Place Order" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewOrder;