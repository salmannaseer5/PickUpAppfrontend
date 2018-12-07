import React, { Component } from 'react';
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="about-container">
          <h1>about pickUP</h1>
        <main>
          <div className="paragraph-1">
          <p>The pickUP app is a tool for riders to schedule a car pick-up to their local destination. The app’s automated dispatch checks a drivers' availability and pairs with a compatible pick-up request.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default About;