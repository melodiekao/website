import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './../config/styles'
import Radium from 'radium';
import links from './../config/links'


class NavBar extends Component {
  render() {
    return (
	      <div>
	        <ul className='NavBar'>
	          <li style={styles.navbar.navItem} key='key1'>
	          	<Link style={styles.navbar.navLink} to="/home" className='Link'>
	          		home
	          	</Link>
		      </li>
		      <div style={styles.navbar.navSpacer}>&nbsp;</div>
	          <li style={styles.navbar.navItem} key='key2'>
	          	<Link style={styles.navbar.navLink} to="/research" className='Link'>
	          		research
	          	</Link>
	  	      </li>
	  	      <div style={styles.navbar.navSpacer}>&nbsp;</div>
	          <li style={styles.navbar.navItem} key='key3'>
	          	<Link style={styles.navbar.navLink} to="/teaching" className='Link'>
	          		teaching
	          	</Link>
	  	      </li>
	  	      <div style={styles.navbar.navSpacer}>&nbsp;</div>
	          <li style={styles.navbar.navItem} key='key5' >
	          	<Link style={styles.navbar.navLink} to="/toolkit" className='Link'>
	          		toolkit
	          	</Link>
	          </li>
	          <div style={styles.navbar.navSpacer}>&nbsp;</div>
	          <li style={styles.navbar.navItem} key='key4'>
          		<a href={links.cv}  target="_blank" style={styles.navbar.navLink} className='Link'>
                	cv
            	</a>
	          </li>
	          <div style={styles.navbar.navSpacer}>&nbsp;</div>
	          <li style={styles.navbar.navItem} key='key5' >
	          	<Link style={styles.navbar.navLink} to="/news" className='Link'>
	          		news
	          	</Link>
	          </li>
	        </ul>
	      </div>
    );
  }
}

export default Radium(NavBar);