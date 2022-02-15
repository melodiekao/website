import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './../config/styles'
import Radium from 'radium';

class Navigation extends Component {
  constructor(props) {
        super(props)

        this.state = {
        	show: false
        }
    }

  componentDidMount() {
	  this.setState = ({
	    show: false
	  })
    }

  openSideBar() {
	  this.setState = ({
	    show: true
	  })
    }

  render() {
    return (
			<Navbar />
			<this.state.show && Sidebar />
			)
	}
}

export default Radium(Navigation);