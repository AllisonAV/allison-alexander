import React, { Component } from 'react'
import Navbar from './Navbar'
import About from './About'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'

export default class Allison extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="content" id="home">
          <Home />
        </section>
        <section className="content" id="about">
          <About />
        </section>
        <section className="content" id="skills">
          <Skills />
        </section>
        <section className="well top container content" id="projects">
          <Projects />
        </section>
      </div>
    )
  }
}
