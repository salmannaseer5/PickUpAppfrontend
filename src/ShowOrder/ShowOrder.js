import React, { Component } from 'react';
import axios from 'axios';

const backendBaseUrl = 'http://localhost:8000';
const postEndpoint = '/api/orders';

class ShowOrder extends Component {

    constructor(props){
        super(props);
        this.state = {
            orderArray: []
        }
    }

    componentDidMount(){

        axios({
            method:'get',
            url: backendBaseUrl + postEndpoint
            })
            .then((orderArray) => this.setState({orderArray: orderArray.data}))
    }

    render() {
        let orderList = this.state.orderArray
        let orderResult = orderList.filter( order => order._id === this.props.match.params.id)
        let order = orderResult[0]
        console.log(order)

        if(typeof order != "undefined"){
            return (    
                
                <div>
                    <h1>Thank you for yor order, {order.name}!</h1>
                    <h2>Confirmation Number: {order._id}</h2>
                    <h2>Pickup Address: {order.pickUpAddress}</h2>
                    <h2>Order number: {order.dropOffAddress}</h2>
                    <h3>A confirmation email will be sent to {order.email}</h3>
                </div>
    
            );
          } else {
              return (
                  <h1>order empty</h1>
              )
            } 

    }

}


export default ShowOrder;

