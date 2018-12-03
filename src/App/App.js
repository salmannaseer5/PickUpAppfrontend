import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
          </Link>
        </nav>
        <header>
          <h1>
            pickUP
          </h1>
        </header>
        <main>
        <Route exact path="/" component={Home}/>
        </main>
      </div>
    );
  }
}

export default App;
