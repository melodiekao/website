import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './../config/styles'
import Radium from 'radium';
import links from './../config/links'


class Sidebar extends Component {
   toggle() {
    this.props.activate()
  }

  render() {
    return (
	      <div onClick={this.toggle.bind(this)}>
	        <ul className='SideBar'>
	          <li style={styles.sidebar.navItem}>
	          	<Link style={styles.sidebar.navLink} to="/home">
	          		home
	          	</Link>
		      </li>
	          <li style={styles.sidebar.navItem}>
	          	<Link style={styles.sidebar.navLink} to="/research">
	          		research
	          	</Link>
	  	      </li>
	  	      <li style={styles.sidebar.navItem}>
	          	<Link style={styles.sidebar.navLink} to="/teaching">
	          		teaching
	          	</Link>
	          </li>
	          <li style={styles.sidebar.navItem}>
	          	<Link style={styles.sidebar.navLink} to="/toolkit">
	          		toolkit
	          	</Link>
	          </li>
	          <li style={styles.sidebar.navItem}>
          		<a href={links.cv}  target="_blank" style={styles.sidebar.navLink}>
                	cv
            	</a>
	          </li>
	          <li style={styles.sidebar.navItem}>
	          	<Link style={styles.sidebar.navLink} to="/news">
	          		news
	          	</Link>
	          </li>
	        </ul>
	      </div>
    );
  }
}

export default Radium(Sidebar);