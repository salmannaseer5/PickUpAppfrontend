import React, { Component } from 'react';
// import axios from 'axios';

// const backendBaseUrl = 'http://localhost:8000';
// const postEndpoint = '/api/orders';


class ShowOrder extends Component {

    // componentDidMount() {
    //     const id = this.props.match.params.id//grab id from new path
    //     const yarn = this.props.list.filter(one => one.id === id)// find matching id in data
    //     console.log(yarn)
    //     axios.get(backendBaseUrl + postEndpoint)
    //         .then(response => {
    //             let yarn = response.data// gets data returned as an object
    //             this.props.setShowOrder(yarn)//sets state of yarn(App) 
    //             console.log(yarn)
    //         })
    //         .catch(err => {
    //             console.error(err)
    //         })

    // }

  render() {

    return (
        <form>
            <h2>Order Number:</h2>
            <h2>{this.props.match.params.id} </h2>
            
      </form>
    );
  }
}

export default ShowOrder;
