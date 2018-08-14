import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './../config/styles'
import Radium from 'radium';
import Sidebar from './sidebar.js'

class BurgerMenu extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  toggle(){
    this.toggleHidden()
    if (!this.isHidden) {setTimeout(this.toggleHidden, 2000)}
  }

  render() {
    return (
			
			<div>
	        <button className="BurgerMenu" onClick={this.toggle.bind(this)} >
	        </button>
	        	{this.state.isHidden && setTimeout(this.toggleHidden(), 2000) && <Sidebar />}
	      	</div>
		   )
	}
}

export default Radium(BurgerMenu);