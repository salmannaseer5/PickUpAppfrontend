import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';



// const backendBaseUrl = 'http://localhost:8000';
const backendBaseUrl = 'https://pickupapp-api.herokuapp.com';
const postEndpoint = '/api/orders';

class ShowOrder extends Component {

    constructor(props){
        super(props);
        this.state = {
            orderArray: [],
            redirect: false
        }

        this.handleDeleteOrder = this.handleDeleteOrder.bind(this);
    }

    handleDeleteOrder = event => {

        axios.delete(backendBaseUrl + postEndpoint + "/" + this.props.match.params.id)
        .then(() => this.setState({redirect: true}))

        //   .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //   })
        
        // .catch(function (error) {console.log(error)})
        // event.preventDefault();
    }



    componentDidMount(){

        axios({
            method:'get',
            url: backendBaseUrl + postEndpoint
            })
            .then((orderArray) => this.setState({orderArray: orderArray.data}))
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to={'/confirm'} />
        }

        let orderList = this.state.orderArray
        let orderResult = orderList.filter( order => order._id === this.props.match.params.id)
        let order = orderResult[0]

        if(typeof order != "undefined"){
            return (    
                
                <div>
                    <h1>Thank you for yor order, {order.name}!</h1>
                    <h2>Confirmation Number: {order._id}</h2>
                    <h2>Pickup Address: {order.pickUpAddress}</h2>
                    <h2>Dropoff Address: {order.dropOffAddress}</h2>
                    <h2>Pickup Time: {order.time}</h2>
                    <h3>A confirmation email will be sent to {order.email}</h3>
                    <form onSubmit={this.handleDeleteOrder}>
                        <input type="submit" value="cancel order"></input>
                    </form>
                </div>
    
            );
          } else {
              return (
                 <h2>Order empty</h2>
              )
            } 
            
    }

}


export default ShowOrder;

