import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        const navstyle = {
            "backgroundColor": "#262626",
            "fontFamily": 'Quantico'
        };
        
        return (
            <nav className="navbar navbar-dark" style={navstyle}>
                <a href="/">
                <h1 className="navbar-brand">Latest News on COVID-19</h1>
                </a>
            </nav>
    );
  }
}