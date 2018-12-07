import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>About Pickup App</h1>
        </Header>
        <main>
          <p>The Pick-up app is a tool for riders to schedule a car pick-up to their local destination. The app’s automated dispatch checks a drivers' availability and pairs with a compatible pick-up request. The app notifies drivers and riders that the pick-up has been booked.</p>
          <p></p>
        </main>
      </div>
    );
  }
}

export default About;