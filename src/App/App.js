import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/Home.js';
import ShowOrder from '../ShowOrder/ShowOrder.js';
import Delete from '../Delete/Delete.js'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home
          </Link>
        </nav>
        <header>
          <h1>
            pickUP
          </h1>
        </header>
        <main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/order/:id" component={ShowOrder}/>
        <Route exact path="/confirm" component={Delete}/>
        </main>
      </div>
    );
  }
}

export default App;
