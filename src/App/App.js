import React, { Component } from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home.js';
import ShowOrder from '../ShowOrder/ShowOrder.js';
import About from '/About'
import Delete from '../Delete/Delete.js'



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
          <Route  exact path="/"
                  component={Home}/>
          <Route  exact path="/order/:id" 
                  component={ShowOrder}/>
          <Route  exact path="/About" 
                  component={About}/>
          <Route exact path="/confirm" 
                  component={Delete}/>
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
