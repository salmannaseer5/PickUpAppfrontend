import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

// defines environmental variables DE
const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION

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
        console.log('delete')
        axios.delete(backendBaseUrl + postEndpoint + "/" + this.props.match.params.id)
        .then(() =>{
            console.log('delete fun ction')
            this.setState({redirect: true})

        })
    }



    componentDidMount(){

        axios({
            method:'get',
            url: backendBaseUrl + postEndpoint
            })
            .then((orderArray) => this.setState({orderArray: orderArray.data}))
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
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

