import React, { Component, Frag } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './../config/styles'
import images from './../config/images'
import Radium from 'radium';
import Sidebar from './sidebar.js'

class BurgerMenu extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }

  openNav = () => {
    this.setState({ isHidden: false })
    setTimeout(() => { this.hideNav() } , 3000)
  }
  hideNav = () => {
    this.setState({ isHidden: true })
  }

  render() {
    return (
		<div>
        <button className="BurgerMenu" onClick={this.openNav} >
        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 26"><title>Navigation Menu</title><path d="M36 4H2a2 2 0 0 1 0-4h34a2 2 0 0 1 0 4zm0 11H2a2 2 0 0 1 0-4h34a2 2 0 0 1 0 4zm0 11H2a2 2 0 0 1 0-4h34a2 2 0 0 1 0 4z"/></svg>
        </button>
        	{!this.state.isHidden && <Sidebar activate={this.hideNav}/>}
      	</div>
	   )
	}
}

export default Radium(BurgerMenu);