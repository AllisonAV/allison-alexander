import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (

  <nav className="navbar navbar-default navbar-fixed-top">
      <div >
        <span className="center-text name">Allison Alexander</span>
        <ul className="nav navbar-right navbar-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
  </nav>
    )
  }
}
