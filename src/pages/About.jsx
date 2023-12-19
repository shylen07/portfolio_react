import React from 'react'
import Glitch from '../components/Glitch'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div className="hero">
        <motion.main className='about-section'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Glitch>About Me</Glitch>
          <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
          <div className="about">
            <div className="image">
            </div>
            <div className="info">
              <h2>Get to know me!</h2>
              <p>I'm a <strong>Frontend Web Developer, Python Developer</strong> building the Front-end of Websites and Web Applications that leads to the success  of the overall product. Check out some of my work in the <NavLink to="/projects"><strong>Projects</strong></NavLink> section.
                Feel free to Connect or Follow me on my Linkedin where I post useful content related to <strong>Web Development and Programming </strong>
                I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <NavLink to="/contact"><strong>contact</strong></NavLink> me.</p>
            </div>
          </div>

          <div className="tech-stack">
            <h2>Tech Stack</h2>
            <div className="stack">
              <div className="front-end">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML 5</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT/ NEXT</li>
                  <li>Material UI</li>
                  <li>REDUX</li>
                </ul>
              </div>
              <div className="back-end">
                <h3>Backend</h3>
                <ul>
                  <li>Django</li>
                  <li>Node.Js</li>
                  <li>RESTFUL APIs</li>
                  <li>DATA STRUCTURES & ALGORITHMS</li>
                </ul>
              </div>
              <div className="database">
                <h3>Database</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.main>
      </div>

    </>
  )
}

export default About