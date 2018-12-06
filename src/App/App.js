import React, { Component } from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home.js';
import ShowOrder from '../ShowOrder/ShowOrder.js';
import About from '../About/About'


class App extends Component {
  render() {
    return (
      <div>
        <nav>
      <Link className="home-app" to="/">PickUp App</Link>
      <Link to="../About/About">About</Link>
      </nav>
      <main>
        <Switch>
          <Route  path="/" exact
                  component={Home}/>
          <Route  path="/order/:id" 
                  component={ShowOrder}/>
          <Route  path="../About/About" 
                  component={About}/>
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
