import React, { Component } from 'react';
import logo from './logo.svg';
import mkao from './images/mkao.jpeg'
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import styles from './config/styles.js'
import Navbar from './components/navbar.js'

import Home from './components/home.js'
import Research from './components/research.js'
import Teaching from './components/teaching.js'
import News from './components/news.js'
import BurgerMenu from './components/burgerMenu.js'

import Radium,{StyleRoot} from 'radium';

class App extends Component {
  render() {

    return (

      /* Light YouTube Embeds by @labnol */
        /* Web: http://labnol.org/?p=27941 */


      // <img src={mkao} className="Background-image" alt="mkao" />
      <StyleRoot>
      <Router>
        <div className="App">
          <div style={styles.base.fullName}>
            <div style={styles.base.first}>
                M
              </div>
            <div style={styles.base.remaining}>
                elodie 
              </div>
            <div style={styles.base.last}>
                K
              </div>
            <div style={styles.base.remaining}>
                ao 
              </div>

          </div>
          <Navbar />
          <BurgerMenu />

          <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/research" component={Research} />
          <Route path="/teaching" component={Teaching} />
          <Route path="/cv" component={Home} />
          <Route path="/students" component={Home} />
          <Route path="/news" component={News} />
          <Redirect from="/" to="/home"  />
          </Switch>
          </div>
      </Router>
      </StyleRoot>
    );
  }
}

export default App;




