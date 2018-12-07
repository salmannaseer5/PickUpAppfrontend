import React, { Component } from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home.js';
import ShowOrder from '../ShowOrder/ShowOrder.js';
<<<<<<< HEAD
import About from '../About/About'
=======
import About from '../About/About.js'
>>>>>>> 7c9a0bc739cd0ea3cb6882efd94cbb85f4e20227
import Delete from '../Delete/Delete.js'

class App extends Component {
  render() {
    return (
      <div>
      <nav>
      <Link className="home-app" to="/">PickUp App</Link>
      <Link className="about-page" to="/about">About</Link>
      </nav>
      <main>
        <Switch>
          <Route  exact path="/"
                  component={Home}/>
          <Route  exact path="/order/:id" 
                  component={ShowOrder}/>
          <Route  exact path="/about" 
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