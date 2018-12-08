import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home.js';
import ShowOrder from '../ShowOrder/ShowOrder.js';
import About from '../About/About.js'
import Delete from '../Delete/Delete.js'

class App extends Component {
  render() {
    return (
      <div className="backgroundImage">
        <header>
          <nav>
            <Link className="home-app" to="/">pickUp</Link>
            <Link className="about-page" to="/about">about</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/"
              component={Home} />
            <Route exact path="/order/:id"
              component={ShowOrder} />
            <Route exact path="/about"
              component={About} />
            <Route exact path="/confirm"
              component={Delete} />
          </Switch>
        </main>
        <footer className="page-footer font-small cyan darken-3">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="mb-5 flex-center">
                  <a href="facebook.com" className="fb-ic"> Facebook  </a>||
                  <a href="twitter.com" className="tw-ic">Twitter  </a> ||
                  <a href="instagram.com" className="gplus-ic">Instagram </a> ||
                  <a href="linkedin.com" className="li-ic">Linkedin  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://http://pickupapp.surge.sh">www.http://pickupapp.surge.sh.com</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;